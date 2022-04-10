FROM node:16.13.2

WORKDIR /usr/src/practice-deploy-backend

COPY ./package.json .

COPY ./package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]