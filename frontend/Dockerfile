FROM node:19-alpine


# set work directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package.json /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./ /usr/src/app

## EXPOSE [Port you mentioned in the vite.config file]
EXPOSE 8000
CMD npm run dev