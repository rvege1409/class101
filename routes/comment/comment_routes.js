/*
 comment module
*/
const express = require('express');
const router = express.Router();

//
const comment = require('./comment');
router.use('/', comment);

module.exports = router;