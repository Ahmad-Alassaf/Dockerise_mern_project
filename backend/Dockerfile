FROM node
WORKDIR /backend
COPY package*.json .
RUN npm install
COPY . .
# request on port 5000 --> on port 4000 of image
ENV PORT=5000
ENV NODE_ENV=development
EXPOSE 5000 
CMD [ "npm","run","server" ]
