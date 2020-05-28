# Command-line bootcamp

Learn the unix command-line by using it in your browser. 

### contributors

- [@blahah](https://github.com/blahah)
- [@jessicamizzi](https://github.com/jessicamizzi)
- [@gedankenstuecke](https://github.com/gedankenstuecke)
- [@alexmorley](https://github.com/alexmorley) *<- responsible for this project still working* 💜


## Contributing

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

# use node version 4.1
nvm install 4.1
nvm use 4.1

# major dependencies
npm install --global docker-browser-server

# setup docker
docker pull ubuntu
git clone https://github.com/Blahah/command_line_bootcamp.git
cd command_line_bootcamp
docker build -t "command_line_bootcamp" .
docker-browser-server command_line_bootcamp -p 8080
```


## Maintainers
\* probably only relevant for maintainers or if you run a public version of this site somewhere else

### public docker server backend
If you want to run this on a public site with https enabled then you'll need to setup the websocket backend run run on ssl too (`wss://`).

- set up a certificate for the address that points to the backend

- set up nginx as an ssl terminator and install the new certificates

- run docker-browser-server on a differnt port so it doesn't conflict with nginx (8000 here)

```nginx
server {
    listen 8080;
    listen 8443 ssl;
    server_name command-line-bootcamp-backend.alexmorley.me

    # Cloudflare can generate al of these files for you.
    ssl on;
    ssl_certificate         /etc/nginx/ssl/command-line-bootcamp-backend.alexmorley.me/server.pem;
    ssl_certificate_key     /etc/nginx/ssl/command-line-bootcamp-backend.alexmorley.me/server.key;
    ssl_trusted_certificate /etc/nginx/ssl/command-line-bootcamp-backend.alexmorley.me/cloudflare_origin_rsa.pem;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;

        # Need these headers to upgrade http connection to websocket
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
        proxy_set_header Host $host;

        # These you might not need
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### cleaning up long-running containers

Sometimes people leave their browser windows open for a really long time. If you don't want to fund the docker container running for that time, you can clean up long-running containers:

```bash
docker stop $(docker ps | grep hours | cut -d ' ' -f1 | paste - - - - )
```
