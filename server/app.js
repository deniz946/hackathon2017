var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dbConnect = require('./config/dbConfig');


var index = require('./routes/index');
var users = require('./routes/users');
var nationality = require('./routes/nationality');
var type = require('./routes/type');
var search = require('./routes/search');

var app = express();

var Nationality = require('./models/Nationality');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
dbConnect();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/nationality', nationality);
app.use('/type', type);
app.use('/search', search);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  res.send({err: true, msg: req.msg, errMsg: err}).status(500);
});

app.listen(3000, function(){
  console.log("Started");
});
module.exports = app;
