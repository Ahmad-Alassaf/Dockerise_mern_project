FROM node as base
FROM base as development
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000 
CMD [ "npm","run","server-dev" ]
FROM base as production
WORKDIR /backend
COPY package*.json .
RUN npm install --only=production
COPY . .
EXPOSE 5000 
CMD [ "npm","run","server-prod" ]
