// packages needed for the hauseingangsbereich module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var HauseingangsbereichSchema = new Schema({
	name: 					String,
	pruefer: 				String,
	datum: 					{ type: Date, default: Date.now },
	adresse: 				String,
	hausmeister: 			String,
	hauseingangsbereich: 	[HauseingangsbereichSchema]
}); 

// export schema
module.exports = mongoose.model('Hauseingangsbereich', HauseingangsbereichSchema);