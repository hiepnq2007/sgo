var express = require('express');
var router = express.Router();
const updateUser = require('../model/updateUser')
router.post('/', updateUser);

module.exports = router;

