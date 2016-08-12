var express = require('express');
var mysql = require('mysql');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var landing = require('./routes/landing');
var users = require('./routes/users');
var employeelogin = require ('./routes/employee-login');
var adminlogin = require('./routes/admin-login');
var errorpage = require ('./routes/error');
var dashboard = require('./routes/dashboard');
var admindashboard = require('./routes/admin-dashboard');
var adminpreviousreports = require('./routes/admin-previous-reports');
var admincurrentreport = require('./routes/admin-current-report');
var previousreports = require('./routes/previous-reports');
var currentreport = require('./routes/current-report');
var addaccount = require('./routes/add-account');
var deleteaccount = require('./routes/delete-account');
var editaccount = require('./routes/edit-account');
var viewaccount = require('./routes/view-account');
var hazmat = require('./routes/hazmat');
var listing = require('./routes/listing');
var researchanalysis = require('./routes/research-analysis');

//Database Properties
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'amnphdb'
});

var app = express();

//Database connection status
con.connect(function(err){
if(err) {
    console.log("Database connection error.");    
} else {
    console.log("Database connection established.");    
}
});

//Database SQL query test 
//app.get('/', function(req, res) {
//  con.query("SELECT * FROM employees", function(err, rows, fields) {
//    if(err) {
//      console.log('Error in query.');
//    } else {
//      console.log('Successful query.');
//    };
//  });
//});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
/*app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/metismenu', express.static(__dirname + '/node_modules/metisMenu'));
app.use('/sb-admin-2', express.static(__dirname + '/node_modules/startbootstrap-sb-admin-2'));*/
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use('/', landing);
//app.use('/users', users);
app.use('/login', employeelogin);
app.use('/notfound', errorpage);
app.use('/admin-login', adminlogin);
app.use('/dashboard', dashboard);
app.use('/admin/dashboard', admindashboard);
app.use('/admin/previous-reports', adminpreviousreports);
app.use('/admin/current-report', admincurrentreport);
app.use('/previous-reports', previousreports);
app.use('/current-report', currentreport);
app.use('/admin/add-account', addaccount);
app.use('/admin/delete-account', deleteaccount);
app.use('/admin/edit-account', editaccount);
app.use('/admin/view-account', viewaccount);
app.use('/hazmat', hazmat);
app.use('/listing', listing);
app.use('/research-and-analysis',researchanalysis);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
