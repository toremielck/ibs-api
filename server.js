// BASE SETUP
// ==================================================

// DEPENDENCIES
var express		= require('express');
var bodyParser	= require('body-parser');
var morgan		= require('morgan');
var mongoose	= require('mongoose');

// create a new express application
var app = express();