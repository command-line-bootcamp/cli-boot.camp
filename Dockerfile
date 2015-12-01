FROM mafintosh/docker-adventure-time

RUN useradd -ms /bin/bash learner
USER learner
WORKDIR /home/learner


