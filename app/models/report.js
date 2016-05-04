// packages needed for the reports module
var mongoose	 = require('mongoose');
var Schema		 = mongoose.Schema;

// report schema
var ReportSchema = new Schema({
	name: 					String,
	pruefer: 				String,
	datum: 					{ type: Date, default: Date.now },
	hauseingangsbereich: 	[{
		briefkastenanlage: 		[{
			pruefung_sauberkeit_ordnung: 	Boolean,
			massnahme_noetig: 				Boolean,
			foto: 							String,
			erforderliche_massnahme: 		String,
			erledigt: 						Boolean
		}],
		haustuer: 				[{
			pruefung_sauberkeit_ordnung: 	Boolean,
			massnahme_noetig: 				Boolean,
			foto: 							String,
			erforderliche_massnahme: 		String,
			erledigt: 						Boolean
		}],
		eingangsbeleuchtung: 	[{
			pruefung_sauberkeit_ordnung: 	Boolean,
			massnahme_noetig: 				Boolean,
			foto: 							String,
			erforderliche_massnahme: 		String,
			erledigt: 						Boolean
		}]
	}]
}); 