var db = require('./db');


//User
exports.user_register = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'insert into user (userName) values(?)';
        var params = [id];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "fail"
                console.log(err);
            }
            else{
                result = "success";
                console.log(result);
            }
            return resolve(result);
        });
    });
}

exports.user_check = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'select * from user where userName=?';
        var params = [id];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "Can use"
                console.log(err);
            }
            else{
                if(rows.insertId >=1){
                    result = "Can't use";
                }
                else{
                    result = "Can use";
                }
                console.log(result);
            }
            return resolve(result);
        });
    });
}




// Post
exports.select_post = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'select * from post where ID = ?';
        var params = [id];
        
        var result="";
        var ret ="";
        await db.query(sql, params, function(err,rows){
            if(err){
                result = "Fail"
                console.log(err);
            }
            else{
                result = "success";
                ret = rows;
                console.log(result);
            }
            return resolve(rows);
        });
    });
}

exports.upload_post = function(writer, title, contents, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'insert into post (writer, title, contents, date) values(?, ?, ?, ?)';
        var params = [writer, title, contents, date];
        
        var result="";
        await db.query(sql, params, function(err,rows){
            if(err){
                result = "Fail"
                console.log(err);
            }
            else{
                result = "success";
                console.log(result);
            }
            return resolve(result);
        });
    });
}

exports.delete_post = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'delete from post where ID=?';
        var params = [id];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "Fail_error"
                console.log(err);
            }
            else{
                if(rows.insertId == 0){
                    result = "Fail_No_Data";
                }
                else{
                result = "Success";
                //console.log(result);
                }
            }
            return resolve(result);
        });
    });
}

exports.update_post = function(writer, title, contents, date, id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'update post SET writer=?, title=?, contents=?, date =? where ID=?';
        var params = [writer, title, contents, date, id];
        
        var result="";
        await db.query(sql, params, function(err,rows){
            if(err){
                result = "Fail_error"
                console.log(err);
            }
            else{
                console.log(rows);
                if(rows.changedRows == 0){
                    result = "Fail_No_Data";
                }
                else{
                result = "Success";
                //console.log(result);
                }
            }
            return resolve(result);
        });
    });
}