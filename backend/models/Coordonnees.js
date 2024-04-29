var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CoordSchema = new Schema ({
    longitude: {
        type:Number,
        
        required: true
    },
    latitude: {
        type:Number,
        required: true
    },
    order: {
        type: Number, // Use Number to represent order
        required: true
    }
});

var Coordonnees = mongoose.model("Coordonees", CoordSchema,"Coordonnees");

module.exports = Coordonnees;