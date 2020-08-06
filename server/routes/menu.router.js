const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // return all categories
    const queryText = `
      SELECT * FROM "products";`;
    pool.query(queryText)
        .then( (result) => {
            res.send(result.rows);
        })
        .catch( (error) => {
            console.log(`***Error on query`,error);
            res.sendStatus(500);
        });
  });

/**
 * POST route template
 */
// router.post('/', (req, res) => {

// });

module.exports = router;