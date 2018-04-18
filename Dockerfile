FROM node:6.1

WORKDIR /app

COPY . /app

RUN yarn

RUN cp config.json.example config.json

RUN yarn run start
