const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




router.post('/', rejectUnauthenticated, async (req, res) => {
    console.log(`req.body`, req.body);
  
    const userId = req.user.id;
    const productId = req.body.product_id;
  
  
    // Get a single connection from the pool to do the transaction 
    // THIS IS IMPORTANT - won't work if you don't use the same connection!
    const connection = await pool.connect();
  
    try {
        await connection.query('BEGIN;')
       
      const selectOrder = `SELECT * FROM orders WHERE user_id = $1 AND payment = false;`;
      const createOrder = `INSERT INTO orders (user_id) VALUES ($1) RETURNING id;`;
      const addProduct = `INSERT INTO items (order_id, product_id) VALUES ($1, $2);`;
        
      const selectOrderQueryResponse = await connection.query(selectOrder, [userId]);

       // Create conditional to SELECT from "orders" where there is a false payment:
        // otherwise create order
        let orderId
        if (selectOrderQueryResponse.rows.length === 1){
            orderId = selectOrderQueryResponse.rows[0].id;
        } else {
            const createOrderQueryResponse = await connection.query(createOrder, [userId]); 
            orderId = createOrderQueryResponse.rows[0].id;
        }
            const addProductQueryResponse = await connection.query(addProduct, [orderId, productId]);
      // End transaction w/ COMMIT
      await connection.query('COMMIT;')
      res.send({orderId});
    } catch (err) {
      console.log('Error on transfer', err);
      // Transaction failed, so send with ROLLBACK
      await connection.query('ROLLBACK')
      res.sendStatus(500);
    } finally {
      // THIS IS ALSO REALLY IMPORTANT!!!
      // Puts the connection back in the pool to be used again later.
      // FREE THE CONNECTION IN FINALLY
      connection.release();
    }
  
  })

module.exports = router;