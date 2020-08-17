const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:adminId', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT 
    orders.id,
    "user".first_name,
    "user".last_name,
    products.description, 
    products.price, 
    orders.payment, 
    orders.status,
    orders.order_date
    FROM orders
    JOIN items
    ON items.order_id = orders.id
    LEFT JOIN products
    ON items.product_id = products.id
    JOIN "user"
    ON orders.user_id = "user".id
    WHERE orders.payment = FALSE
    AND orders.status = FALSE
    ORDER BY orders.id;`;
    //     WHERE orders.payment = FALSE needs to be changed to TRUE once stripe API is connected
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on fetchOrders query`,error);
            res.sendStatus(500);
        });
  });


module.exports = router;