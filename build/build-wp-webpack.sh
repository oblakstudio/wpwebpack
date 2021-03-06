#!/bin/bash

version=$1
zip -r ./build/wp-webpack-$version.zip ./src/*
