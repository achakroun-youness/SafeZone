const Coordinates = require('../models/Coordinates');

// Controller for creating a new coordinate
exports.createCoordinate = async (req, res) => {
    try {
        const { longitude, latitude, order } = req.body;
        const coordinate = new Coordinates({ longitude, latitude, order });
        await coordinate.save();
        res.status(201).json({ message: 'Coordinate created successfully', coordinate });
    } catch (error) {
        console.error('Error creating coordinate:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Controller for getting all coordinates
exports.getAllCoordinates = async (req, res) => {
    try {
        const coordinates = await Coordinates.find();
        res.status(200).json(coordinates);
    } catch (error) {
        console.error('Error getting coordinates:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
