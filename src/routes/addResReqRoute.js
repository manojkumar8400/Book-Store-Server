const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { restReq, restReqList, resReqRemove, resReqApproove, resReqDecline } = require('../controller/addRestReqController');
const upload = require('../middleware/multer');
const router = express.Router(); 

router.post('/addResReq', verifyToken, upload.single('image'), restReq); // Client

router.get('/restReqList', verifyToken, restReqList );   // Client and Admin  

router.post('/removeRequest', verifyToken, resReqRemove); // Client can remove our request

router.post('/requestApproove/:_id', verifyToken, resReqApproove);  // Admin

router.post('/requestDecline/:_id', verifyToken, resReqDecline);    // Admin

module.exports = router; 