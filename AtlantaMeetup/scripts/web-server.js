var express = require('express');
var path = require('path');
var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname+ '/../');
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());


app.use(express.static(rootPath+'/app'));

app.get('/data/event/:id',events.get);
app.get('/data/event',events.getAll);
app.post('/data/event/:id',events.save);

app.get('*',function(req,res) {
	res.sendFile(rootPath + '/app/index.html');
});

app.listen(8000);

console.log("server is listening 8000");