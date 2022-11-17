FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm i

#production build (ugly code)
# RUN npm run build

# CMD ["npm", "run", "start"]

CMD ["npm", "run", "dev"]