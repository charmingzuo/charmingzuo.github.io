var path = require('path'),
    bodyParser = require('body-parser'),
    expresss = require('express'),
    fs = require('fs');

var app = expresss();
app.use('/', expresss.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/playerList.json', function(req, res) {
    fs.readFile('playerList.json', function(err, data) {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});
app.listen(8888);
console.log('Server started: http://localhost:8888/');