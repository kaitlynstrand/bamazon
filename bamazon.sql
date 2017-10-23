DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  itemID INT AUTO_INCREMENT NOT NULL,
  productName VARCHAR(25) NULL,
  departmentName VARCHAR(25) NULL,
  price DECIMAL(10,2) NULL,
  stockQuantity INT NULL,

  PRIMARY KEY (itemId)
);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Yahtzee", "Dice Games", 34.50, 25);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Clue", "Board Games", 29.95, 45);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Sequence", "Strategic Games", 6.99, 50);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Chess", "Strategic Games", 95.99, 75);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Mancala", "Strategic Games", 9.99, 30);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Scrabble", "Board Games", 14.95, 45);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Risk", "Board Games", 22.00, 70);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Left Right Center", "Dice Games", 4.99, 200);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Hungry Hungry Hippo", "Children's Games", 12.95, 60);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Monopoly", "Board Games", 32.95, 55);

INSERT INTO products (productName, departmentName, price, stockQuantity)
VALUES ("Trouble", "Children's Games", 22.95, 70);