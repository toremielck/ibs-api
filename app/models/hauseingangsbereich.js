// packages needed for the hauseingangsbereich module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var HauseingangsbereichSchema = new Schema({
	briefkastenanlage: 		[IbsListObjectSchema],
	haustuer: 				[IbsListObjectSchema],
	eingangsbeleuchtung: 	[IbsListObjectSchema]
}); 

// export schema
module.exports = mongoose.model('Hauseingangsbereich', HauseingangsbereichSchema);