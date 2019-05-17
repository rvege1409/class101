var db = require('./db');
exports.user_register = async function(id){
    //console.log(id);
    
    var sql = 'insert into user (userName) values(?)';
    var params = [id];
    
    var result="";
    await db.query(sql,params, function(err,rows){
        if(err){
            result = "fail"
            console.log(result);
        }
        else{
            result = rows.ID;
            console.log(result);
        }
    });
    
    return result;
}   