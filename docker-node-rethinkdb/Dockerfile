# Pull base image.
FROM ubuntu:16.04

RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt-get update && \
  apt-get -y upgrade && \
  apt-get install -y build-essential && \
  apt-get install -y software-properties-common && \
  apt-get install -y byobu curl git htop man unzip vim wget python-pip sudo

# Install RethinkDB.
RUN \
  echo "deb http://download.rethinkdb.com/apt `lsb_release -cs` main" > /etc/apt/sources.list.d/rethinkdb.list && \
  wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -

# Install NVM
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash

RUN \
  sudo apt-get update && \
  sudo apt-get install -y rethinkdb

# Install python driver for rethinkdb
RUN pip install --upgrade rethinkdb

RUN pip install --upgrade awscli