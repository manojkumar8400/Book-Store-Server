const express = require('express');
const { restaurentList, searchRestaurent } = require('../controller/restaurentController');
const verifyToken = require('../middleware/verifyToken');
const router = express.Router(); 

router.get('/restaurentList', restaurentList);

router.get('/searchRestaurent', searchRestaurent);

module.exports = router;