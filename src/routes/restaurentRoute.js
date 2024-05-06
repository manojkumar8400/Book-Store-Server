const express = require('express');
const { addRestaurents, restaurentList, searchRestaurent } = require('../controller/restaurentController');
const router = express.Router(); 

router.post('/addRestaurent', addRestaurents);

router.get('/restaurentList', restaurentList);

router.get('/searchRestaurent', searchRestaurent);

module.exports = router;