Create docker image from default Dockerfile with:
`docker build -t codecollab-prod .`

Create docker image from given Dockerfile with:
`docker build -t [orgname]/mm-dev -f Dockerfile-dev .`

Run docker container with:
`docker run -p 8090:8080 codecollab-prod`
This creates a container. Port 8090 on localhost is proxied onto port 8080 on the container; you can also proxy localhost:8080 onto docker container :8080.
