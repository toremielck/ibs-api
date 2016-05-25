// packages needed for the reports module
var mongoose	 		 		= require('mongoose');
var Schema		 		    	= mongoose.Schema;
var HauseingangsbereichModel 	= require('./hauseingangsbereich');

// report schema
var ReportSchema = new Schema({
	name: 					String,
	pruefer: 				String,
	datum: 					{ type: Date, default: Date.now },
	adresse: 				String,
	hausmeister: 			String,
	hauseingangsbereich: 	[HauseingangsbereichModel.schema]
}); 

// export schema
module.exports = mongoose.model('Report', ReportSchema);