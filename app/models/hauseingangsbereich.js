// packages needed for the reports module
var mongoose	 		= require('mongoose');
var Schema		 		= mongoose.Schema;
var IbsListObjectModel 	= require('./ibslistobject');

// report schema
var HauseingangsbereichSchema = new Schema({
	briefkastenanlage: 		[IbsListObjectModel.schema]
}); 

// export schema
module.exports = mongoose.model('Hauseingangsbereich', HauseingangsbereichSchema);