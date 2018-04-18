FROM node:9.6.1

RUN npm i -g yarn

WORKDIR /app

COPY . /app

COPY package.json /app

RUN yarn

COPY . /app

RUN cp config.json.docker config.json

RUN yarn run start
