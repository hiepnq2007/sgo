var express = require('express');
var router = express.Router();
const otpModel = require('../model/checkOTP')
router.get('/', otpModel);

module.exports = router;

