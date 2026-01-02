FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .
# request on port 5000 --> on port 4000 of image


EXPOSE 5000 
CMD [ "npm","run","server" ]
