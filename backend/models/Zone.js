var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ZoneSchema = new Schema({
    coordinates: [{
        type: Schema.Types.ObjectId, // Reference to the Coordonnees model
        ref: 'Coordinates'
    }],
    typeZone:{
        type: String,
        enum: ['danger', 'safe', 'normal'],
        required: false
    }
});

var Zone = mongoose.model("Zone", ZoneSchema, "Zone");

module.exports = Zone;