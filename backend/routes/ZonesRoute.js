var express = require('express');
var router = express.Router();
var zoneController = require('../controllers/ZoneController');

// Route to create a new zone
router.post('/', zoneController.createZone);

// Route to get all zones
router.get('/', zoneController.getAllZones);

module.exports = router;
