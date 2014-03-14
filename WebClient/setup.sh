#!/bin/bash

# Shell script for setting up environment in order to be able to make builds.

# Use latest npm and node versions
export PATH=../node:$PATH

# Install required node modules
npm config set registry http://registry.npmjs.org/
npm install
