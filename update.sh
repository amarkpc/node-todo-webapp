#!/bin/bash

# Change to the desired directory
cd /path/to/your/directory

# Perform Git pull
git pull

# Install NPM dependencies
npm install

# Run Sequelize migrations
npx sequelize-cli db:migrate

# Build Docker image
docker build . -t <your_username>/node-web-app

# Run Docker container
docker run -p 49160:8080 -d <your_username>/node-web-app
