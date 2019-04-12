CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN  DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("baconburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("bbq burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("jumbo burger", true);

SELECT * FROM burgers;

UPDATE burgers SET devoured = true WHERE id = 1;