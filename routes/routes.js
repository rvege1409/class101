const express = require('express');
const router = express.Router();

// comment
const comment = require('./comment/comment_routes');
router.use('/comment', comment);

// user
const user = require('./user/user_routes');
router.use('/user', user);

//post
const post = require('./post/post_routes');
router.use('/post', post);

module.exports = router;