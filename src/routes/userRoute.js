const express = require('express');
const { registerUser, userLogin, userInfo } = require('../controller/userController');
const router = express.Router(); 

router.post('/register', registerUser);

router.post('/login', userLogin);

router.get('/userInfo', userInfo);

module.exports = router;
