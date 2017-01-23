FROM realstax/docker-node

RUN npm install -g node-gyp

RUN apk update \
  && apk add linux-headers \
             build-base \
             bash \
             python \
  && rm -rf /var/cache/apk/* \
  && /bin/bash \
  && npm install -g ngyp \
  && apk del linux-headers \
             build-base \
             python

CMD [ "node" ]