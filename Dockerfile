FROM circleci/node:7-browsers
MAINTAINER patrykkopycinski

WORKDIR /home/node/test-flow

# Bundle app source by overwriting all WORKDIR content.
COPY . /home/node/test-flow

RUN npm set progress=false && sudo npm install ; npm cache clean

CMD [ "npm", "start" ]
