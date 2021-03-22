FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g serve

COPY . .
RUN npm run build
RUN ls

EXPOSE 80

CMD ["serve","-l","80", "-s", "build"]