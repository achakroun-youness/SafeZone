const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/ZoneController');

// Get all zones
router.get('/Allzones', zoneController.getAllZones);

// Get a single zone by ID
router.get('/:id', zoneController.getZoneById);

// Create a new zone
router.post('/zones', zoneController.createZone);

// Update a zone by ID
router.put('/:id', zoneController.updateZone);

// Delete a zone by ID
router.delete('/:id', zoneController.deleteZone);

module.exports = router;
