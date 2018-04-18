FROM node:6.1

RUN npm i -g yarn

WORKDIR /app

COPY . /app

COPY package.json /app

RUN yarn

COPY . /app

RUN cp config.json.example config.json

RUN yarn run start
