FROM realstax/docker-node

RUN mkdir -p /opt/app
WORKDIR /opt/app

RUN apk update \
  && apk add linux-headers \
             build-base \
             bash \
             python \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && yarn global add node-gyp \
  && yarn add microtime \
  && apk del linux-headers \
             build-base \
             bash \
             python

CMD [ "node" ]