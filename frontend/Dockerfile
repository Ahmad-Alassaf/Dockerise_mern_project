FROM node as base
FROM base as development
WORKDIR /frontend
COPY package*.json .
RUN npm install 
COPY . .
CMD [ "npm","start" ]
FROM base as production
WORKDIR /frontend
COPY package*.json .
RUN npm install --only=production
COPY . .
CMD [ "npm","start" ]
