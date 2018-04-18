# todo-nestjs

To do list - Simple API REST powered by [NestJS](https://github.com/nestjs/nest)

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# create docker container for mongodb
$ docker run --name mongo -d -p 27017:27017 mongo

# create a copy of config.json
$ cp config.json.example config.json

# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
