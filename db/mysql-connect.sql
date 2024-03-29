CREATE DATABASE nodeRest;

USE nodeRest;

SHOW TABLES;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) COLLATE utf8_unicode_ci,
  email VARCHAR(50) COLLATE utf8_unicode_ci,
  data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  PRIMARY KEY (`id`)
);

DESCRIBE users;


SELECT * FROM news;
