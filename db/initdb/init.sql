CREATE DATABASE demo;
USE demo;
CREATE TABLE motd (
  id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO motd 
    (message) 
VALUES 
    ("Hello from DB");

