# # This base image is required to install node 
# FROM ubuntu:14.04

# # Change the current director to following
# WORKDIR /usr/src/app

# # install curl && apache
# RUN apt-get update && apt-get install curl -y
# RUN apt-get install apache2 -y
# # Downlaod the nodejs package to install 
# RUN curl -sL https://deb.nodesource.com/setup_15.x | bash

# RUN apt-get install --force-yes nodejs -y
# # install node
# # RUN brew install node
# RUN node -v

FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm run build

COPY . .

EXPOSE 80

CMD ["serve","-s", "build"]