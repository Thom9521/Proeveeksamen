var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var costumersRouter = require('./routes/costumers');
var frontpageRouter = require('./routes/frontpage');
var costumersJSONRouter = require('./routes/costumersJSON');
var employeesJSONRouter = require('./routes/employeesJSON');
var costumersAddRouter = require('./routes/costumersAdd');
var costumersEditRouter= require('./routes/costumersEdit');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/employees', employeesRouter);
app.use('/costumers', costumersRouter);
app.use('/frontpage', frontpageRouter);
app.use('/employeesJSON', employeesJSONRouter);
app.use('/costumersJSON', costumersJSONRouter);
app.use('/costumersAdd', costumersAddRouter);
app.use('/costumersEdit', costumersEditRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
