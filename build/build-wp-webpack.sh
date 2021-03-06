#!/bin/bash

NEXT_VERSION=$1
CURRENT_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')

sed -ie "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEXT_VERSION\"/g" package.json
rm -f package.jsone

cd src
zip -r ../build/wp-webpack-$NEXT_VERSION.zip ./.
