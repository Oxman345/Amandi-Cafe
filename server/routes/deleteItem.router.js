const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.delete('/:orderId', rejectUnauthenticated, (req, res) => {
  console.log(req.params.orderId)
    // return from the orders table WHERE user_id = req.user AND payment = false
    const queryText = `
    DELETE FROM items WHERE order_id = $1 AND product_id = $2;`;
    pool.query(queryText, [req.params.orderId, req.body.product_id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error deleting item`,error);
            res.sendStatus(500);
        });
  });

module.exports = router;