#!/bin/bash


echo "Pulling origin master from github."
git pull origin master

echo "Changing file contexts for nginx to read"
sudo chcon -Rt httpd_sys_content_t /home/centos/mattwebdev/public/webdev-saggs/

echo "Check to see file contexts"
sudo ls -lZ /home/centos/mattwebdev/public/webdev-saggs/

echo "Restarting nginx server"

sudo systemctl restart nginx

echo "Verify server is running"
sudo systemctl status nginx

echo "Done"
echo "**************************************"


