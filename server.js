// BASE SETUP
// ==================================================

// DEPENDENCIES
var express		= require('express');
var bodyParser	= require('body-parser');
var morgan		= require('morgan');
var mongoose	= require('mongoose');

// create a new express application
var app 		= express();

// load models for the database
var Report 		= require('./app/models/report');

// specify the port for the server 
// if no port is specified by the process the port 8080 is taken as default
var port 		= process.env.PORT || 8080 

// connect to local mongoDB database
mongoose.connect('mongodb://localhost:27017/ibs-api');


// APP CONFIGURATION
// ==================================================

// body-parser used to grab information from post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure the app to handle CORS requests
app.use(function(req, res, next) {
	res.set({
  		'Access-Control-Allow-Origin': '*',
  		'Access-Control-Allow-Methods': 'GET, POST',
  		'Access-Control.Allow-Headers': 'X-Requested-With, content-type, Authorization'
	});
	next();
});

// log request information to the console for development using 'morgan'
app.use(morgan('dev'));
