docker run -p 3000:3000 \
    -v lerna-docker-frontCounter:/app/.db/counter  \
    lerna-docker-apps-front:latest