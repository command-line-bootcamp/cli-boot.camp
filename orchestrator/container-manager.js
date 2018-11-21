exports.LariContainerManager=LariContainerManager;

function LariContainerManager() {
	this.handleApiRequest=function(cmd,query,closer,callback) {handleApiRequest(cmd,query,closer,callback);};
	this.handlePollFromContainer=function(query,closer,callback) {handlePollFromContainer(query,closer,callback);};
	this.handleResponsesFromContainer=function(query,closer,callback) {handleResponsesFromContainer(query,closer,callback);};
	this.availableContainers=function() {return availableContainers();};

	var m_containers={};

	function handleApiRequest(cmd,query,closer,callback) {
		var id=query.container_id;
		if (!(id in m_containers)) {
			callback({success:false,error:'Container not found with id: '+id});	
			return;
		}
		var C=m_containers[id];
		C.handleApiRequest(cmd,query,closer,callback);
	}

	function handlePollFromContainer(query,closer,callback) {
		var id=query.container_id;
		if (!id) {
			callback({success:false,error:'Missing query parameter: container_id'});
			return;
		}
		if (!(id in m_containers)) {
			m_containers[id]=new Container();
		}
		var C=m_containers[id];
		C.handlePollFromContainer(query,closer,callback);
	}

	function handleResponsesFromContainer(query,closer,callback) {
		var id=query.container_id;
		if (!id) {
			callback({success:false,error:'Missing query parameter: container_id'});
			return;
		}
		if (!(id in m_containers)) {
			callback({success:false,error:'Container not found: container_id'});
			return;
		}
		var C=m_containers[id];
		C.handleResponsesFromContainer(query,closer,callback);
	}

	function availableContainers() {
		var ret={};
		for (var id in m_containers) {
			ret[id]={};
		}
		return ret;
	}
}

function Container() {
	this.handlePollFromContainer=function(query,closer,callback) {handlePollFromContainer(query,closer,callback);};
	this.handleApiRequest=function(cmd,query,closer,callback) {handleApiRequest(cmd,query,closer,callback);};
	this.handleResponsesFromContainer=function(query,closer,callback) {handleResponsesFromContainer(query,closer,callback);};

	var m_active_polls_from_container={};
	var m_active_requests_to_container={};

	function handlePollFromContainer(query,closer,callback) {
		var poll_id=make_random_id(10);

		m_active_polls_from_container[poll_id]={
			query:query,
			callback:callback,
			timestamp:new Date()
		}

		//close all the others (because they might actually be defunct)
		for (var id in m_active_polls_from_container) {
			if (id!=poll_id) {
				console.log ('Closing other poll from container.');
				var poll0=m_active_polls_from_container[id];
				poll0.callback({success:true,message:'not used *'});
				poll0.callback=null; //make sure we don't call it again by accident
				delete m_active_polls_from_container[id];
			}
		}

		closer.on('close',function() {
			console.log ('Poll from container has been closed.');
			if (poll_id in m_active_polls_from_container)
				delete m_active_polls_from_container[poll_id];
		});
	}

	function handleApiRequest(cmd,query,closer,callback) {
		wait_for_active_poll_from_container(10*1000,closer,function(poll) {
			if (!poll) {
				callback({success:false,error:'Error waiting for active poll from container '+query.container_id});
				return;
			}
			var req={
				request_id:make_random_id(10),
				cmd:cmd,
				query:query,
				timestamp:new Date()
			};
			m_active_requests_to_container[req.request_id]={request:req,callback:callback}

			var requests=[req];
			poll.callback({success:true,requests:requests});
		});
	}

	function make_random_id(len) {
	    var text = "";
	    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	    for( var i=0; i < len; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
	}

	function wait_for_active_poll_from_container(msec,closer,callback) {
		var need_to_cancel=false;
		closer.on('close',function() {
			console.log ('Request closed while waiting for active poll from container.');
			need_to_cancel=true;
		});

		wait_for_active_poll_from_container_2(new Date(),msec,closer,callback);
		function wait_for_active_poll_from_container_2(start_timestamp,msec,closer,callback) {
			var first_poll_id=null;
			for (var pid in m_active_polls_from_container) {
				first_poll_id=pid;
				break;
			}
			if (first_poll_id) {
				var poll=m_active_polls_from_container[first_poll_id];
				delete m_active_polls_from_container[first_poll_id];
				callback(poll);
			}
			else {
				var elapsed=(new Date())-start_timestamp;
				if (elapsed>msec) {
					callback(null);
					return;
				}
				if (need_to_cancel) {
					return;
				}
				setTimeout(function() {
					wait_for_active_poll_from_container_2(start_timestamp,msec,closer,callback);
				},100);
			}
		}
	}
	

	function handleResponsesFromContainer(query,closer,callback) {
		if (!('responses' in query)) {
			callback({success:false,error:'Missing query parameter: responses'});
			return;
		}
		var responses=query.responses;
		if (!typeof(responses)=='object') {
			callback({success:false,error:'Improper type of query parameter: responses'});
			return;
		}
		callback({success:true,message:'Received. Working on it.'});

		// we are responding right away, so we don't need to worry about the closer here

		for (var i in responses) {
			var resp=responses[i];
			var request_id=resp.request_id||'';
			if (request_id in m_active_requests_to_container) {
				m_active_requests_to_container[request_id].callback(resp.response);
				delete m_active_requests_to_container[request_id];
			}
			else {
				console.warn('No request found with id: '+request_id);
			}
		}
	}

	function housekeeping() {
		for (var poll_id in m_active_polls_from_container) {
			var AP=m_active_polls_from_container[poll_id];
			var elapsed=(new Date())-AP.timestamp;
			if (elapsed>20*1000) {
				AP.callback({success:true,message:'not used'});
				AP.callback=null; //make sure we don't call it again by accident
				delete m_active_polls_from_container[poll_id];
			}
		}

		setTimeout(function() {
			housekeeping();
		},5000);
	}
	setTimeout(function() {
		housekeeping();
	},20);
}
