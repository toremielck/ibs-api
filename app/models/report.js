// packages needed for the reports module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var ReportSchema = new Schema({
	name: 					String,
	pruefer: 				String,
	datum: 					{ type: Date, default: Date.now },
	adresse: 				String,
	hausmeister: 			String,
	hauseingangsbereich: 	[HauseingangsbereichSchema]
}); 

// export schema
module.exports = mongoose.model('Report', ReportSchema);