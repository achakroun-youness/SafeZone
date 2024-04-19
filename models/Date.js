var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DateSchema = new Schema ({
    DateDebut: {
        type: mongoose.SchemaTypes.Date,
        index: true,
        required: true
    },
    DateFin: {
        type: mongoose.SchemaTypes.Date,
        index: true,
        required: true
    },
   
    
});

var Date = mongoose.model("User", DateSchema);

module.exports = Date;