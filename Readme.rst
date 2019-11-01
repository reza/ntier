Demo Tech Task
==============

Requirements
-----------------------

Using automation we want to spin up an environment which will allow us to connect to a web server on port 80 or 8080 and serve a bit of simple HTML 
content from a data storage source. You will be required to write a small application in the language/framework of your choice to connect to the database, query it, and return the result to the user.

Criteria
--------
* Developed within a git repository with frequent commits
* Automated way to spin up/down single machine environment (vagrant, docker compose, minikube etc)
* OS installation/configuration (Windows or Linux, any versions)
* Configuration management (Chef/Puppet/Ansible, Dockerfile or kube deployment files) to install and configure applications
* Installation of a web tier and data tier (your choice, e.g. NGINX/Apache/IIS, MySQL/PostgreSQL/Redis/etc)
* Running a simple web application to query and return data

Approach
--------

* a public github repository is used for development
* we use containerised services for each tier using docker-compose up/down for automated deployment 
* service containers for db, app server and web proxy will have their own Dockerfile for OS installations/config
* installation requirements are met in image creation stage 
* simple web structure is considered with repeatable/scalable approach as far as no complexity is added

Setup
-----

docker-compose build

docker-compose up

docker-machine ip	

the web service will be available at reported docker machine ip or http://localhost or http://127.0.0.1

Debug
-----

docker exec -it ntier_web_1 /bin/sh



