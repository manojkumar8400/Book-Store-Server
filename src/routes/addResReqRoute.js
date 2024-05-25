const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { addRestReq, addRestReqList, removeResReq, requestApproove, requestDecline } = require('../controller/addRestReqController');
const router = express.Router(); 

router.post('/addResReq', verifyToken, addRestReq);

router.get('/restReqList', verifyToken, addRestReqList );

router.post('/removeRequest', verifyToken, removeResReq);

router.post('/requestApproove', verifyToken, requestApproove);

router.post('/requestDecline', verifyToken, requestDecline);

module.exports = router; 