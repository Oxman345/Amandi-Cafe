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
router.post('/', rejectUnathenticated,(req, res) => {
    console.log(req.body)
    const cart = req.body
    const queryText = `
    `

});

module.exports = router;