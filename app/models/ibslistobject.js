// packages needed for the reports module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var IbsListObjectSchema = new Schema({
	pos: 		Boolean
}); 

// export schema
module.exports = mongoose.model('IbsListObject', IbsListObjectSchema);