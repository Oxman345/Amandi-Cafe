const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/:orderId', rejectUnauthenticated, (req, res) => {
  console.log(req.params.orderId)
    // return from the orders table WHERE user_id = req.user AND payment = false
    const queryText = `
      SELECT * FROM "items";`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on query`,error);
            res.sendStatus(500);
        });
  });


module.exports = router;