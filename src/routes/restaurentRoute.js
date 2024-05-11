const express = require('express');
const { addRestaurents, restaurentList, searchRestaurent } = require('../controller/restaurentController');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router(); 

router.post('/addRestaurent', verifyToken, addRestaurents);

router.get('/restaurentList', restaurentList);

router.get('/searchRestaurent', searchRestaurent);

module.exports = router;