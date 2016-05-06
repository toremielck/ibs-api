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

// use body-parser to grab information from post requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure the app to handle CORS requests
app.use(function(req, res, next) {
	res.set({
  		'Access-Control-Allow-Origin': '*',
  		'Access-Control-Allow-Methods': 'GET, POST, PUT',
  		'Access-Control.Allow-Headers': 'X-Requested-With, content-type, Authorization'
	});
	next();
});

// log request information to the console for development using 'morgan'
app.use(morgan('dev'));


// API ROUTES
// ==================================================

// basic route for the homepage
app.get('/', function(req, res) {
	res.send('Welcome to the IBS API!');
});

// route for getting all reports
app.route('/reports').get(function(req, res) {
	Report.find(function(err, reports) {
		if(err) {
			res.send(err);
		}
		// respond with all reports in JSON format
		res.json(reports);
	});
});

// route for adding a new report to the database via POST
app.route('/reports').post(function(req, res) {
	// create a new instance of the report model
	var report = new Report();

	// set the reports information (comes from the request)
	report.name 	= req.body.name;
	report.pruefer 	= req.body.pruefer;
	report.text 	= req.body.text;

	// save the record and check for errors
	report.save(function(err) {
		// check for duplicate entry
		if(err) {
			if(err.code == 11000) {
				return res.json({ success: false, message: "duplicate entry" });
			} else {
				return res.send(err);
			}
		}

		res.send('report successfully saved to database');
	});
});

// CRUD operations for http://host/reports/:report_id
app.route('/reports/:report_id')

	// GET report by id
	.get(function(req, res) {
		Report.findById(req.params.report_id, function(err, report) {
			if(err) res.send(err);

			res.json(report); 
		});
	})

	// PUT update report
	.put(function(req, res) {
		Report.findById(req.params.report_id, function(err, report) {
			if(err) res.send(err);

			// update the reports information only if it's new
			if(req.body.name) report.name 		= req.body.name;
			if(req.body.pruefer) report.pruefer = req.body.pruefer;
			if(req.body.text) report.text 		= req.body.text;

			report.save(function(err) {
				if(err) res.send(err);

				res.send('report ' + req.params.report_id + ' successfully updated');
			});
		});
	})

	.delete(function(req, res) {
		Report.remove({ _id: req.params.report_id }, function(err, report) {
			if(err) res.send(err);

			res.send('report ' + req.params.report_id + ' deleted');
		});
	})


// STARTING THE SERVER
// ==================================================

// listening on specified port
app.listen(port);