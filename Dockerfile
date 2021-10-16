FROM node:latest

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]

RUN npm install --silent && \
    mv node_modules ../

COPY . .

EXPOSE 8080

RUN chown -R node /usr/src/app

USER node

CMD ["npm", "start"]
