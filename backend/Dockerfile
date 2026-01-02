FROM node
WORKDIR /backend
COPY package*.json .
ARG NODE_ENV
RUN if [ "$NOD_ENV"=="production" ]; \
    then npm install --only=production; \
    else npm install; \
    fi

COPY . .
# request on port 5000 --> on port 4000 of image


EXPOSE 5000 
CMD [ "npm","run","server-dev" ]
