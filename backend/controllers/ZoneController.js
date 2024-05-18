const Zone = require('../models/Zone');
const Coordinates = require('../models/Coordinates');

// Get all zones
exports.getAllZones = async (req, res) => {
    try {
        const zones = await Zone.find().populate('coordinates');
        res.status(200).json(zones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single zone by ID
exports.getZoneById = async (req, res) => {
    try {
        const zone = await Zone.findById(req.params.id).populate('coordinates');
        if (!zone) return res.status(404).json({ message: "Zone not found" });
        res.status(200).json(zone);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new zone
exports.createZone = async (req, res) => {
    const { coordinates } = req.body;

    // Ensure coordinates are provided and are an array
    if (!coordinates || !Array.isArray(coordinates)) {
        return res.status(400).json({ message: "Coordinates must be an array of ObjectId references" });
    }

    const zone = new Zone({
        coordinates: coordinates
    });

    try {
        const newZone = await zone.save();
        res.status(201).json(newZone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a zone by ID
exports.updateZone = async (req, res) => {
    const { coordinates } = req.body;

    if (coordinates && !Array.isArray(coordinates)) {
        return res.status(400).json({ message: "Coordinates must be an array of ObjectId references" });
    }

    try {
        const updatedZone = await Zone.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedZone) return res.status(404).json({ message: "Zone not found" });
        res.status(200).json(updatedZone);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a zone by ID
exports.deleteZone = async (req, res) => {
    try {
        const zone = await Zone.findByIdAndDelete(req.params.id);
        if (!zone) return res.status(404).json({ message: "Zone not found" });
        res.status(200).json({ message: "Zone deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
