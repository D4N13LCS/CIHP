CREATE DATABASE IF NOT EXISTS cihp_bd;

USE cihp_bd;

CREATE TABLE voluntarios(
    voluntario_id INT AUTO_INCREMENT PRIMARY KEY,
    voluntario_name VARCHAR(150),
    voluntario_email VARCHAR(150) UNIQUE,
    voluntario_key VARCHAR(30)
);


