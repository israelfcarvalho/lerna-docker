#!/bin/bash

docker run -p 3000:3000 \
    -v lerna-docker-frontCounter:/app/.db/counter  \
    --network lerna-docker-front-back \
    lerna-docker-apps-front:latest