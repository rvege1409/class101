/*
 comment module
*/
const express = require('express');
const router = express.Router();

//
const post = require('./post');
router.use('/', post);

module.exports = router;