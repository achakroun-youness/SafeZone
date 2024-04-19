var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CoordSchema = new Schema ({
    longitude: {
        type: mongoose.SchemaTypes.Float,
        index: true,
        required: true
    },
    Latitude: {
        type:mongoose.SchemaTypes.Float,
        required: true
    },
   
   
});

var Coordonnees = mongoose.model("Coodronees", CoordSchema);

module.exports = Coordonnees;