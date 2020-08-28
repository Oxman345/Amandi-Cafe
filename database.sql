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
    user_id int,
    FOREIGN KEY (user_id) REFERENCES "user"(id),
    payment BOOLEAN DEFAULT FALSE,
    status BOOLEAN DEFAULT FALSE,
    order_date timestamp DEFAULT now()
);

CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    order_id int, 
    FOREIGN KEY (order_id) REFERENCES orders(id),
    product_id int,
    FOREIGN KEY (product_id) REFERENCES products(id)
);

SELECT * FROM "orders";

SELECT * FROM "user";

SELECT * FROM "products";

INSERT INTO "products" ("description", "price", "img")
VALUES 
('Cookie Monster', 5.99, 'https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/4/74/4745c65f-879d-5b66-afc9-e6a18d390f96/59e0c7d78dbe1.image.jpg'),
('Strawberry Supreme', 5.99, 'https://bloximages.chicago2.vip.townnews.com/madison.com/content/tncms/assets/v3/editorial/4/74/474936f8-d8e9-5ca5-b34e-bd4d1e06d5dd/59e0c7d7c2f99.image.jpg'),
('Macho Mango', 5.99, 'https://www.shopfoleyfirst.com/microsite/photogallery/10337232.jpg'),
('Coffee Delight', 5.99, 'https://www.shopfoleyfirst.com/tools/products/photos/10440111.jpg'),
('Matcha Matcha', 5.99, 'https://media-cdn.tripadvisor.com/media/photo-s/10/54/ee/90/matcha-green-tea-ice.jpg'),
('Vanilla Ice', 5.99, 'https://t4.ftcdn.net/jpg/02/79/58/21/240_F_279582176_2af82sy3Ljs0sgXE4gSBAveSykUzND3F.jpg');

SELECT * FROM "items";
