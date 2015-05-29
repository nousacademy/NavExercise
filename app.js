var express = require('express');
var logger = require('morgan');
var path = require('path');
var api = require('./api');
var data = require('./data/nav.json')
var app = express();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', api);

module.exports = app;

app.get('/data', function(req, res){
    res.send(data);
});