var express = require('express');
var app = express();
var bodyParser = require('body-parser');
require('date-utils');
const routes =require('./routes/routes');


//app.use
app.use(express.static('public')); //static 디렉토리 지정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);

//app.set
app.set('view_engine', 'ejs'); // 뷰 엔진 설정

app.listen(3000, function(){
    console.log('Connected 3000 port!');
});