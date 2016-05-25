// packages needed for the reports module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var HauseingangsbereichSchema = new Schema({
	foto: 	String
}); 

// export schema
module.exports = mongoose.model('Hauseingangsbereich', HauseingangsbereichSchema);