const express = require('express');
const router = express.Router();
const usedb = require('../../lib/usedb');


/*
 Method : Get
*/

/*
 Method : Post
*/


router.post('/register', async function(req, res){ // user 등록
    var id = req.body.userID;
    var name = req.body.userName;
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');
    var result ="";
    var check = await usedb.user_check(id);
    
    if(check=="success"){
        result = await usedb.user_register(id,name,date);
    }
    res.send(result);
});


module.exports = router;