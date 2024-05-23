const express = require('express');

const router = express.Router();
const zoneController = require('../controllers/ZoneController');



const validateObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid Zone ID' });
    }
    next();
  };
  
// Get all zones
router.get('/Allzones', zoneController.getAllZones);

router.get('/zones/types', zoneController.getAllTypeZones);

// Get a single zone by ID
router.get('/zones/:id', zoneController.getZoneById);

// Create a new zone
router.post('/zones', zoneController.createZone);

// Update a zone by ID
router.put('/:id', zoneController.updateZone);

// Delete a zone by ID
router.delete('/:id', zoneController.deleteZone);

module.exports = router;
