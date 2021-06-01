#!/bin/bash

NEXT_VERSION=$1
CURRENT_VERSION=$(cat package.json | grep version | head -1 | awk -F= "{ print $2 }" | sed 's/[version:,\",]//g' | tr -d '[[:space:]]')

sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEXT_VERSION\"/g" package.json
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEXT_VERSION\"/g" src/package.json

npm run build

cd src
zip -r ../build/wp-webpack-$NEXT_VERSION.zip ./. -x dist/**\* node_modules/**\*
