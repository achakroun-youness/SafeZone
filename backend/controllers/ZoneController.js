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


// Define controller function for creating a new zone with coordinates
exports.createZone = async (req, res) => {
    try {
        // Extract coordinates array from the request body
        const { coordinates } = req.body;

        // Validate that coordinates is an array
        if (!Array.isArray(coordinates)) {
            return res.status(400).json({ error: "Coordinates must be an array" });
        }

        // Create an array to store new Coordonnees objects
        const newCoordinatesArray = [];

        // Loop through each coordinate object in the array
        for (const coord of coordinates) {
            // Extract longitude, latitude, and order from the coordinate object
            const { longitude, latitude, order } = coord;

            // Create a new Coordonnees object with the extracted data
            const newCoordinates = new Coordinates({
                longitude,
                latitude,
                order,
            });

            // Save the new Coordonnees object to the database
            const savedCoordinates = await newCoordinates.save();

            // Push the saved Coordonnees object to the array
            newCoordinatesArray.push(savedCoordinates._id);
        }

        // Create a new Zone object with the array of Coordonnees object IDs
        const newZone = new Zone({
            coordinates: newCoordinatesArray,
        });

        // Save the new zone to the database
        const savedZone = await newZone.save();

        // Respond with the saved zone
        res.status(201).json(savedZone);
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ error: "Server error" });
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
