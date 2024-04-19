var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EtatSchema = new Schema ({
    Code: {
        type: mongoose.SchemaTypes.String,
        index: true,
        required: true
    },
   
   
});

var Etat = mongoose.model("Etat", EtatSchema);

module.exports = Etat;