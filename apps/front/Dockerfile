FROM node:16-alpine

ENV REACT_APP_BACK_HOST=back

WORKDIR /app

COPY . /app

RUN npm i

#production build (ugly code)
# RUN npm run build

# CMD ["npm", "run", "start"]

RUN ls -la

CMD ["npm", "run", "dev"]