FROM circleci/node:8-browsers
MAINTAINER patrykkopycinski

WORKDIR /home/node/test-flow

COPY . /home/node/test-flow

RUN sudo yarn

CMD [ "npm", "start" ]
