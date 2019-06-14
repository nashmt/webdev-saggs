#!/bin/bash

git pull origin master
echo "Pulling origin master from github."

ng serve
echo "Restarting local http server"
echo "Waiting 10s"
wait 10s

echo "Restarting nginx server"

sudo systemctl restart nginx

echo "Verify server is running"
sudo systemctl status nginx



