# Command-line bootcamp

Learn the unix command-line by using it in your browser.


### how to run the docker server

Instructions for running on digitalocean:

Create a new instance of the Ubuntu+docker image.

then ssh in and...

```bash
# keep it running
tmux

# need some basics
apt-get update
apt-get install -y build-essential g++

# install and set up nvm and node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
source ~/.bash_profile

# some dependencies don't work with node 1+, so stick with 0.12
nvm install 0.12
nvm use 0.12

# major dependencies
npm install --global docker-browser-server

# setup docker
docker pull ubuntu
git clone https://github.com/Blahah/command_line_bootcamp.git
cd command_line_bootcamp
docker build -t "command_line_bootcamp" .
docker-browser-server command_line_bootcamp -p 8080
```


### cleaning up long-running containers

Sometimes people leave their browser windows open for a really long time. If you don't want to fund the docker container running for that time, you can clean up long-running containers:

```bash
docker stop $(docker ps | grep hours | cut -d ' ' -f1 | paste - - - - )
```
