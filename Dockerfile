# FROM node:11.0.0-alpine

# RUN mkdir -p /src/app

# WORKDIR /src/app

# COPY . /src/app

# #Docker build mongo:4.0.4-xenial
# RUN npm install --production
# RUN npm run seed

# EXPOSE 3004

# CMD ["npm", "run", "start"]

FROM node:11.0.0-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install
EXPOSE 3004
CMD [ "node", "server/server.js" ]