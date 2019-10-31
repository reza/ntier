Database backend
================

docker image for the database backend

Required
--------
initial seeding of database

Setup
-----

docker build . -t db
docker run --rm -e MYSQL_ROOT_PASSWORD=secret -t db 
