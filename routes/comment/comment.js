const express = require('express');
const router = express.Router();
const usedb = require('../../lib/usedb');

/*
 Method : Get
*/

/*
 Method : Post
*/

router.post('/upload', async function(req,res){
    var id = req.body.userID;
    var pid = req.body.postID;
    var contents = req.body.contents;
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');

    var result = await usedb.comment_upload(id,pid,contents, date);
    res.send(result);
});

router.post('/read', async function(req,res){
    var id = req.body.userID;

    var result = await usedb.read_comment(id);
    res.send(result);
});


router.post('/update', async function(req,res){
    var serial = req.body.serial;
    var id = req.body.postID;
    var userID = req.body.userID;
    var contents = req.body.contents;
    console.log(id);
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');
    
    var result = await usedb.update_comment(serial,id,userID, contents, date);
    res.send(result);
});


router.post('/delete', async function(req,res){
    var serial = req.body.serial;
    console.log(serial);
    var result = await usedb.delete_comment(serial);
    res.send(result);
});



module.exports = router;