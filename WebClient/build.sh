#!/bin/bash

# Shell script for building given configuration. Usage:
# ./build.sh <configuration>
#
# Supported configurations:
#   Release: Build actual release build consisting of optimized and javascripts.
#   Debug: Process gettext-translations and buld a development website.
#   Test: Run unit tests.
#   e2e: Run e2e tests (requires webdriver to be launched separately).

configuration="Release"
if [ -n "$1" ]; then
  configuration="$1"
fi

# Use latest npm and node versions
export PATH=../node:$PATH

# Build configuration
node ./node_modules/grunt-cli/bin/grunt $configuration
