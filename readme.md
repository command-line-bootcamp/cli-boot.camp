# Command-line bootcamp

Learn the unix command-line by using it in your browser.

Contents of this README:

- [build and deploy the frontend](#build-and-deploy-the-frontend)
- [setup and run the docker server backend](#setup-and-run-the-docker-server-backend)
- [cleaning up long-running containers](#cleaning-up-long-running-containers)
- [using the framework for a different course](#using-the-framework-for-a-different-course)

### build and deploy the frontend

You'll need node.js

```bash
# install and set up nvm and node
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
source ~/.bashrc

# some dependencies don't work with node 1+, so stick with 0.12
nvm install 0.12
nvm use 0.12
```

Once you've got node installed, grab this repo and let node install the dependencies:

```bash
git clone https://github.com/Blahah/command_line_bootcamp.git
cd command_line_bootcamp
npm install
```

Make your changes (if any) and then deploy:

```bash
npm run deploy
```

### setup and run the docker server backend

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
source ~/.bashrc

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

### using the framework for a different course

The setup used in this app can easily be adapted to other command-line based courses. The steps are as follows:

1. Get your course material in markdown format.
2. Organise the content into one markdown file per tutorial unit, and name the files with a two-digit leading number, followed by the unit name, followed by the `.md` extension. For example `01_first_chapter.md`, `02_moving_on.md`, etc.
3. Clone this repo and replace the content of the `markdown` directory with your markdown tutorial files.
4. Edit `guide.html` to describe your course.
5. Follow the procedure in the sections ['build and deploy the frontend'](#build-and-deploy-the-frontend) and ['setup and run the docker server backend'](#setup-and-run-the-docker-server-backend)
