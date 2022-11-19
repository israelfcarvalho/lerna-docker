FROM node:16-alpine

WORKDIR /app

COPY . /app/

RUN npm install

RUN npm build

CMD ["npm", "run", "start"]