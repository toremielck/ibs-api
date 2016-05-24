// packages needed for the IbsListObject module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var IbsListObjectSchema = new Schema({
	pos: 		Boolean,
	mn: 		Boolean,
	foto: 		String,
	em: 		String,
	erledigt: 	Boolean
}); 

// export schema
module.exports = mongoose.model('IbsListObject', IbsListObjectSchema);