const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { addToCart, cartList, removeFromCart } = require('../controller/cartController');
const router = express.Router(); 

router.post('/addToCart', verifyToken, addToCart);

router.get('/cartList', verifyToken, cartList);

router.post('/removeFromCart', removeFromCart);

module.exports = router;