#!/bin/bash

cd /demo-app

pm2 start ./node_modules/react-scripts/scripts/start.js --name "marketing" --watch

pm2 startup

pm2 save

pm2 restart all
