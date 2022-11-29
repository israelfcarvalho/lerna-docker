#!/bin/bash

docker run -p 4000:4000 \
    -v lerna-docker-apps-back-users:/app/src/.db \
    --network lerna-docker-front-back --network-alias back\
    lerna-docker-apps-back:latest