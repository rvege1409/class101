var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var usedb = require('./lib/usedb');

//app.use
app.use(express.static('public')); //static 디렉토리 지정
app.use(bodyParser.json()); //json 형태로 오는것도 처리하겠다.
app.use(bodyParser.urlencoded({extended:true}));//한글, 특수기호 -> 다른 문자열로 치환해서 보냄 그걸처리하겠다.

//app.set
app.set('view_engine', 'ejs'); // 뷰 엔진 설정

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});

//get
app.get('/user_register/:id', function(req, res){
    var id = req.params.id;
    console.log(id);
    var r = usedb.user_register(id);
    res.send(r);
});



//post

