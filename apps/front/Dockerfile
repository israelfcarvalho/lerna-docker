# build stage
FROM node:16-alpine as build

ENV REACT_APP_BACK_HOST=back

WORKDIR /app

COPY  package.json package-lock.json /app/

RUN npm i

COPY . /app

RUN npm run build

# deploy stage
FROM node:16-alpine  
WORKDIR /app

COPY --from=build /app/.next /app/.next
COPY --from=build /app/package.json /app/
COPY --from=build /app/package-lock.json /app/

RUN npm i --omit=dev

CMD ["npm", "run", "start"]