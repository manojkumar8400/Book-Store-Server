const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { favRest, favRestList, removeFromFavList } = require('../controller/fevRestController');
const router = express.Router(); 

router.post('/addFavRest', verifyToken, favRest);

router.get('/fevRestList', verifyToken, favRestList);

router.post('/removeFromFavList', removeFromFavList);

module.exports = router;