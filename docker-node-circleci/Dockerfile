FROM circleci/node:7

ENV PATH /root/.yarn/bin:$PATH
ENV PYTHONIOENCODING=UTF-8

RUN sudo apt-get update && \
    sudo apt-get upgrade -y && \
    sudo apt-get install -y \
      curl \
      git \
      unzip \
      groff \
      less \
      man \
      ssh \
      python \
      python-dev \
      python-pip \
      python-virtualenv && \
		sudo rm -r /var/lib/apt/lists/*

RUN sudo pip install awscli

RUN sudo curl -o- -L https://yarnpkg.com/install.sh | bash

RUN sudo curl -Ls https://convox.com/install/linux.zip > /tmp/convox.zip && \
  sudo unzip /tmp/convox.zip -d /usr/local/bin

RUN sudo mkdir -p /usr/local/removeBuildFromYaml
WORKDIR /usr/local/removeBuildFromYaml
COPY package.json /usr/local/removeBuildFromYaml/
COPY yarn.lock /usr/local/removeBuildFromYaml/
COPY removeBuildFromYaml.js /usr/local/removeBuildFromYaml/
RUN sudo yarn

COPY deployToECR.sh /usr/local/bin/

RUN sudo chmod -R 0755 /usr/local/bin/*

CMD [ "node" ]