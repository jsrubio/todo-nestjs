FROM node:6.1

WORKDIR /app

COPY . /app

COPY package.json /app

RUN yarn

COPY . /app

RUN cp config.json.example config.json

RUN yarn run start
