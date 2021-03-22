FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && npm install -g serve
RUN npm install -g dotenv
COPY . .
RUN ls -a


ARG REACT_APP_FIREBASE_API_KEY=AIzaSyCcl-VmqqdwySv0jUuG0S3KQHSkeqXtcqs
ARG REACT_APP_FIREBASE_AUTH_DOMAIN=way-to-way.firebase.com
ARG REACT_APP_FIREBASE_DATABASE_URL=https://way-to-way.firebaseio.com
ARG REACT_APP_FIREBASE_PROJECT_ID=way-to-way
ARG REACT_APP_FIREBASE_STORAGE_BUCKET=way-to-way.appspot.com
ARG REACT_APP_FIREBASE_MESSAGING_SENDER_ID=731977739171
ARG REACT_APP_FIREBASE_APP_ID=1:731977739171:web:fab6418fb0741b024e8816
ARG REACT_APP_FIREBASE_MEASUREMENT_ID=G-SZ6BVXY9Z8
RUN npm run build

EXPOSE 80

CMD ["serve","-l","80", "-s", "build"]
# CMD ["npm", "run", "build"]
# CMD ["serve", "-s", "build"]