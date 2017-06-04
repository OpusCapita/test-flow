FROM circleci/node:8-browsers
MAINTAINER patrykkopycinski

WORKDIR /home/node/test-flow

# Bundle app source by overwriting all WORKDIR content.
COPY . /home/node/test-flow

RUN yarn

CMD [ "npm", "start" ]
