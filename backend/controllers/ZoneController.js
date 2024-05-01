var Zone = require('../models/Zone');

// Controller function to handle creating a new zone
exports.createZone = function(req, res) {
    var newZone = new Zone(req.body);
    newZone.save(function(err, zone) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(zone);
        }
    });
};

// Controller function to handle getting all zones
exports.getAllZones = function(req, res) {
    Zone.find({}, function(err, zones) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(zones);
        }
    });
};
