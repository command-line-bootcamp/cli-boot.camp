# Command-line bootcamp

Learn the unix command-line by using it in your browser.

### how to run

Instructions for running on digitalocean:

Create a new instance of the Ubuntu+docker image.

then ssh in and...

```bash
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
npm install --global docker-browser-server adventure-time browserify beefy

# setup docker
docker pull ubuntu
docker-browser-server ubuntu --port 8080 >> docker.log 2>> docker.err &
```
