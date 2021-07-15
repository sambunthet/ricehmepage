FROM node:12.20.1
WORKDIR /usr/app
COPY . .
RUN yarn
RUN yarn build
# CMD [ "yarn", "start"]
ENTRYPOINT ["yarn", "start"]