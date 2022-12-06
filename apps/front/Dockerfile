FROM node:16-alpine

ENV REACT_APP_BACK_HOST=back

WORKDIR /app

COPY . /app

RUN npm i

RUN npm run build

CMD ["npm", "run", "start"]