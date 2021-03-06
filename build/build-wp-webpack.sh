#!/bin/bash

version=$1
cd src
zip -r ../build/wp-webpack-$version.zip ./.
