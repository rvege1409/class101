const express = require('express');
const router = express.Router();
const usedb = require('../../lib/usedb');

/*
 Method : Get
*/

/*
 Method : Post
*/

//post 
router.post('/upload', async function(req,res){
    var id = req.body.userID;
    var title = req.body.title;
    var contents = req.body.contents;
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');

    var result = await usedb.upload_post(id, title, contents, date);
    res.send(result);
});

router.post('/read', async function(req,res){
    var id = req.body.userID;

    var result = await usedb.read_post(id);
    res.send(result);
});

router.post('/delete', async function(req,res){
    var id = req.body.postID;
    console.log(id);
    var result = await usedb.delete_post(id);
    res.send(result);
});

router.post('/update', async function(req,res){
    var id = req.body.postID;
    var userID = req.body.userID;
    var title = req.body.title;
    var contents = req.body.contents;
    console.log(id);
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');
    
    var result = await usedb.update_post(id,userID, title, contents, date);
    res.send(result);
});

module.exports = router;