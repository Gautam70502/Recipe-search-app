#!/bin/bash

cd /demo-app

curl -sL https://rpm.nodesource.com/setup_20.x | sudo -E bash -
yum -y install nodejs npm
