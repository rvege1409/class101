var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var usedb = require('./lib/usedb');
require('date-utils');



//app.use
app.use(express.static('public')); //static 디렉토리 지정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//app.set
app.set('view_engine', 'ejs'); // 뷰 엔진 설정

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/public/main.html');
});

//get
app.get('/user_register/:id', async function(req, res){ // user 등록
    var id = req.params.id;
    //console.log(id);
    var result = await usedb.user_register(id);
    res.send(result);
});

app.get('/user_check/:id', async function(req,res){ // user 확인
    var id = req.params.id;
    var result = await usedb.user_check(id);
    res.send(result);
});





//post

app.post('/select_post', async function(req,res){
    var id = req.body.id;
    var result = await usedb.select_post(id);
    res.send(result);
});

app.post('/upload_post', async function(req,res){
    var writer = req.body.writer;
    var title = req.body.title;
    var contents = req.body.contents;
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');

    var result = await usedb.upload_post(writer, title, contents, date);
    res.send(result);
});

app.post('/delete_post', async function(req,res){
    var id = req.body.id;
    var result = await usedb.delete_post(id);
    res.send(result);
});

app.post('/update_post', async function(req,res){
    var id = req.body.id;
    var writer = req.body.writer;
    var title = req.body.title;
    var contents = req.body.contents;
    console.log(id);
    var newDate = new Date();
    var date = newDate.toFormat('YYYY-MM-DD HH24:MI;SS');
    var result = await usedb.update_post(writer, title, contents, date,id);
    res.send(result);
});