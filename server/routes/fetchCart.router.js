const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:orderId', rejectUnauthenticated, (req, res) => {
  console.log('fetchCart====>', req.params.orderId)
    // return from the orders table WHERE user_id = req.user AND payment = false
    const queryText = `
    SELECT 
    orders.id as order_id, products.description, products.price, products.img, items.id
    FROM orders
    INNER JOIN items
    ON items.order_id = orders.id
    LEFT JOIN products
    ON items.product_id = products.id
    WHERE orders.id = $1
    AND orders.payment = false
    AND orders.user_id = $2;`;
    pool.query(queryText, [req.params.orderId, req.user.id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on query`,error);
            res.sendStatus(500);
        });
  });


module.exports = router;