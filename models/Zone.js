var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ZoneSchema = new Schema ({
    name: {
        type: mongoose.SchemaTypes.String,
        index: true,
        required: true
    },
   
    
});

var Zone = mongoose.model("User", ZoneSchema);

module.exports = Zone;