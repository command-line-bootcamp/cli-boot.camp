FROM ubuntu

RUN useradd -ms /bin/bash learner

# copy the nice dotfiles that dockerfile/ubuntu gives us:
RUN cd && cp -R .bashrc .profile /home/learner

RUN chown -R learner:learner /home/learner

USER learner

ENV HOME /home/learner
WORKDIR /home/learner


