#!/bin/bash

docker run -p 3000:3000 \
    -v lerna-docker-frontCounter:/app/.db/counter  \
    -v $(pwd)/src:/app/src \
    lerna-docker-apps-front:latest