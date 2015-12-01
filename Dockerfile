FROM mafintosh/docker-adventure-time

RUN groupadd -r bootcamp && useradd -r -g bootcamp learner
USER learner