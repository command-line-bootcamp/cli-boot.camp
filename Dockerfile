FROM ubuntu

RUN apt-get update && apt-get install -y curl git python build-essential

RUN useradd -ms /bin/bash learner

# copy the nice dotfiles that dockerfile/ubuntu gives us:
RUN cd && cp -R .bashrc .profile /home/learner

RUN chown -R learner:learner /home/learner

USER learner

ENV HOME /home/learner
WORKDIR /home/learner

RUN curl https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

#change it to your required node version
ENV NODE_VERSION 5.1.0

#needed by nvm install
ENV NVM_DIR /home/learner/.nvm

#install the specified node version and set it as the default one, install the global npm packages
RUN . ~/.nvm/nvm.sh && nvm install $NODE_VERSION && nvm alias default $NODE_VERSION && npm install --global expose-fs

RUN echo "expose-fs >> /dev/null 2>> /dev/null &" >> /home/learner/.bashrc
RUN echo "export PS1=\"\[$(tput bold)\]\[\033[38;5;75m\]\u\[$(tput sgr0)\]\[$(tput sgr0)\]\[\033[38;5;232m\]@:\[$(tput sgr0)\]\[\033[38;5;9m\]\W\[$(tput sgr0)\]\[\033[38;5;232m\]\\$\[$(tput sgr0)\]\[\033[38;5;15m\] \[$(tput sgr0)\]\"" >> /home/learner/.bashrc