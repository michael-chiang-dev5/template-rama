# Description

We use docker as part of our CI/CD pipeline. You don't have to do anything special; this document serves as a reference in case in the future we need to modify our docker files.

## Potential improvements

Currently, docker is only used in production to deploy CodeCollab on AWS. We could also create a docker image with hot reloading for development.

## Useful commands

Create docker image from default Dockerfile with:

```
docker build -t codecollab-prod .
```

Create docker image from given Dockerfile with:

```
docker build -t codecollab-prod -f docker/Dockerfile.dev .
```

Run docker container with:

```
docker run -p 8090:8080 codecollab-prod
```

This creates a container. Port 8090 on localhost is proxied onto port 8080 on the container; you can also proxy localhost:8080 onto docker container :8080.

Log into docker container with interactive shell:

```
docker exec -it <CONTAINER_NAME> /bin/bash
```
