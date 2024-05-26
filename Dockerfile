FROM node:alpine

RUN npm install -g @angular/cli@18

WORKDIR /front-app

COPY . /front-app

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]