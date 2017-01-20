FROM node:7-alpine

RUN apk --update --no-cache add git openssh bash curl

CMD [ "node" ]
