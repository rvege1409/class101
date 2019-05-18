var db = require('./db');

//User
exports.user_register = function(id, name, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'insert into user (userID, userName, Date) values(?, ?, ?)';
        var params = [id, name, date];
        
        var result1="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "fail"
                console.log(err);
            }
            else{
                result = "success";
                //console.log(result);
            }
            return resolve(result);
        });
    });
}

exports.user_check = function(id){
    //console.log(id);
    return new Promise(async function(resolve, reject){
        var sql = 'select * from user where userID = ?';
        var params = [id];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "fail"
                console.log(err);
            }
            else{
               if(rows.length >=1){
                   result ="fail";
               }
               else{
                result = "success";
                //console.log(result);
               }
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

exports.upload_post = function(id, title, contents, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'insert into post (userID, title, contents, date) values(?, ?, ?, ?)';
        var params = [id, title, contents, date];
        
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

exports.read_post = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'select * from post where userID = ?';
        var params = [id];
        
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
            return resolve(rows);
        });
    });
}

exports.delete_post = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'delete from post where postID = ?';
        var params = [id];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "Fail_error"
                console.log(err);
            }
            else{
                console.log(rows);
                if(rows.affectedRows == 0){
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

exports.update_post = function(id,userID, title, contents, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'update post SET userID=?, title=?, contents=?, Date =? where postID=?';
        var params = [userID, title, contents, date, id];
        
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

/////////////comment
exports.comment_upload = function(id,pid,contents, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'insert into comment (userID, postID, contents, Date) values(?, ?, ?, ?)';
        var params = [id, pid, contents, date];
        
        var result = "";
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

exports.read_comment = function(id){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'select * from comment where userID = ?';
        var params = [id];
        
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
            return resolve(rows);
        });
    });
}

exports.update_comment = function(serial,id,userID,contents, date){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'update comment SET userID=?, postID=?, contents=?, Date =? where serial=?';
        var params = [userID, id, contents, date, serial];
        
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


exports.delete_comment = function(serial){
    //console.log(id);
    
    return new Promise(async function(resolve, reject){
        var sql = 'delete from comment where serial = ?';
        var params = [serial];
        
        var result="";
        await db.query(sql,params, function(err,rows){
            if(err){
                result = "Fail_error"
                console.log(err);
            }
            else{
                console.log(rows);
                if(rows.affectedRows == 0){
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