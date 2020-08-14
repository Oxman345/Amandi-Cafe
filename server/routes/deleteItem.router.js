const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.delete('/:item_id', rejectUnauthenticated, (req, res) => {
  console.log('=======>', req.params.item_id)
    // return from the orders table WHERE user_id = req.user AND payment = false
    const queryText = `
    DELETE
    FROM items
    WHERE id = $1;`;
    pool.query(queryText, [req.params.item_id])
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error deleting item`,error);
            res.sendStatus(500);
        });
  });

module.exports = router;
// DELETE FROM items 
//     WHERE id = 
//     (SELECT id FROM items 
//       WHERE order_id = $1 
//       AND product_id = $2 LIMIT 1);