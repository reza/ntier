Database backend
================

docker image for the database backend

Required
--------
initial seeding of database

Setup
-----

docker build . -t db
docker run -p 3306:3306 --rm -e MYSQL_ROOT_PASSWORD=secret -e MYSQL_DATABASE=demo -t db --default-authentication-plugin=mysql_native_password
