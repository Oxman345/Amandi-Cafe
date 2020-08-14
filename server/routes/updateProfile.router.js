const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');




router.put('/:userId', rejectUnauthenticated, (req, res) => {
    console.log(`put req.body`, req.body);
      const profile = req.body
      const queryText = `
      UPDATE "user"
      SET 
      "first_name" = '$1', 
      "last_name" = '$2', 
      "email" = '$3', 
      "phone_number" = '$4'
      WHERE 
      "id" = '$5';`;
      const queryValues = [
        profile.firstName,
        profile.lastName,
        profile.email,
        profile.phoneNumber,
        req.user.id
      ]
      pool.query(queryText, queryValues)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((error) => {
          console.log(`***Error updating profile`, error);
          res.sendStatus(500);
      })
    });

module.exports = router;