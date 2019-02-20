FROM node:10.15.1-alpine

ENV HOME=/usr/src/app

WORKDIR $HOME/

COPY package.json .
RUN npm install
COPY index.js .

CMD ["npm", "start"]
