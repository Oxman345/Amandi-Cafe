
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!

CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(55),
    last_name VARCHAR(55),
    email VARCHAR(65),
    username VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    phone_number VARCHAR(13),
    employee BOOLEAN DEFAULT FALSE
);

CREATE TABLE "products" (
    id SERIAL PRIMARY KEY,
    description VARCHAR(150),
    price int,
    img VARCHAR NOT NULL 
);

CREATE TABLE "orders" (
    id SERIAL PRIMARY KEY,
    user_id int REFERENCES "user",
    payment BOOLEAN DEFAULT FALSE,
    status BOOLEAN DEFAULT FALSE,
    order_date timestamp DEFAULT now(),
    sale_complete timestamp 
); 

CREATE TABLE "items" (
    id SERIAL PRIMARY KEY,
    order_id int, 
    user_id int,
    product_id int,
    quantity int DEFAULT(1),
);

SELECT * FROM items WHERE user_id = $1;

-- POST sending with addbutton we need this info
INSERT INTO items (user_id, product_id, quantity, price)
VALUES ($1,$2,1,$3);

-- transaction
-- DELETE ALL FROM ITEMS WHERE USER_ID = $1 if payment goes through???


