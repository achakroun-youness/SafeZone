const express = require('express');
const zoneController = require('../controllers/ZoneController');
const router = express.Router();

router.post("/zone", zoneController.createZone);


module.exports = router;
