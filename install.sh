#!/bin/bash

# Shell script for setting up build environment and building a release configuration build.

# Initialize supported node.js version
mkdir -p node
cd node
wget http://nodejs.org/dist/v0.10.26/node-v0.10.26-linux-x64.tar.gz
tar xvzf node-v0.10.26-linux-x64.tar.gz
rm -fr node-v0.10.26-linux-x64.tar.gz
ln -s node-v0.10.26-linux-x64/bin/node
ln -s node-v0.10.26-linux-x64/bin/npm
cd ../WebClient

# Run actual setup and release build
. ./install.sh
