var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CoordSchema = new Schema ({
    longitude: {
        type: Number,
        required: false
    },
    latitude: {
        type: Number,
        required: false
    },
    order: {
        type: Number, 
        required: false
    }
});

var Coordinates = mongoose.model("Coordinates", CoordSchema,"Coordinates");

module.exports = Coordinates;