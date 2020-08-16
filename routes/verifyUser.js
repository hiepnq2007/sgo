var express = require('express');
var router = express.Router();
const verifyModel = require('../model/verifyUser')
router.post('/', verifyModel);

module.exports = router;

