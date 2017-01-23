FROM realstax/docker-node

RUN apk update \
  && apk add linux-headers \
             build-base \
             bash \
             python \
  && rm -rf /var/cache/apk/* \
  && /bin/bash

CMD [ "node" ]
