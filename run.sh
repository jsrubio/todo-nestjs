#!/bin/bash

# create docker container for mongodb
sudo docker run --name mongo -d -p 27017:27017 mongo

# create a copy of config.json
cp config.json.example config.json

# development
yarn run start
