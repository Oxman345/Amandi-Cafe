const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
import rejectUnathenticated from '../modules/authentication-middleware'

/**
 * GET route template
 */
// router.get('/', (req, res) => {
    
// });

/**
 * POST route template
 */

 router.post('/cart', (req, res) => {
     console.log(`req.body`, req.body);
     res.sendStatus(200);
 })


// router.post('/cart'), async, rejectUnathenticated, (req, res) => {
//     console.log(`req.body`, req.body);
  
//     const toOrders = req.body.to_acct_id;
//     const toItems = req.body.from_acct_id;
//     const amount = req.body.amount;
  
  
//     // Get a single connection from the pool to do the transaction 
//     // THIS IS IMPORTANT - won't work if you don't use the same connection!
//     const connection = await pool.connect();
  
//     try {
//       const createOrder = `INSERT INTO orders (user_id) VALUES ($1) RETURNING id;`;
//       const addItem = `INSERT INTO items (order_id, user_id) VALUES ($1, $2);`;
//       await connection.query(createOrder, [fromAcct, -amount]); 
//       await connection.query(addItem, [toAcct, amount]);
  
//       // End transaction w/ COMMIT
//       await connection.query('COMMIT;')
//       res.sendStatus(200);
//     } catch (err) {
//       console.log('Error on transfer', err);
//       // Transaction failed, so send with ROLLBACK
//       await connection.query('ROLLBACK')
//       res.sendStatus(500);
//     } finally {
//       // THIS IS ALSO REALLY IMPORTANT!!!
//       // Puts the connection back in the pool to be used again later.
//       // FREE THE CONNECTION IN FINALLY
//       connection.release();
//     }
  
//   }

module.exports = router;