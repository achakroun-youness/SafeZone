const Coordonnees = require('../models/Coordonnees');

// Controller function to create a new Coordonnees document
exports.createCoordonnees = async (req, res) => {
    try {
        const { longitude, latitude, order } = req.body;

        // Create a new Coordonnees document
        const coordonnees = new Coordonnees({
            longitude,
            Latitude: latitude,
            order
        });

        // Save the Coordonnees document to the database
        await coordonnees.save();

        // Return the newly created Coordonnees document
        res.status(201).json(coordonnees);
    } catch (error) {
        console.error('Error creating Coordonnees:', error);
        res.status(500).json({ error: 'Error creating Coordonnees' });
    }
};

// Controller function to retrieve all Coordonnees documents
exports.getAllCoordonnees = async (req, res) => {
    try {
        // Retrieve all Coordonnees documents from the database
        const coordonnees = await Coordonnees.find();

        // Return the array of Coordonnees documents
        res.status(200).json(coordonnees);
    } catch (error) {
        console.error('Error retrieving Coordonnees:', error);
        res.status(500).json({ error: 'Error retrieving Coordonnees' });
    }
};

// Controller function to retrieve a single Coordonnees document by ID
exports.getCoordonneesById = async (req, res) => {
    try {
        const { id } = req.params;

        // Retrieve the Coordonnees document by ID from the database
        const coordonnees = await Coordonnees.findById(id);

        // If the document does not exist, return a 404 error
        if (!coordonnees) {
            return res.status(404).json({ error: 'Coordonnees not found' });
        }

        // Return the Coordonnees document
        res.status(200).json(coordonnees);
    } catch (error) {
        console.error('Error retrieving Coordonnees by ID:', error);
        res.status(500).json({ error: 'Error retrieving Coordonnees' });
    }
};

// Controller function to update a Coordonnees document by ID
exports.updateCoordonneesById = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Update the Coordonnees document by ID in the database
        const updatedCoordonnees = await Coordonnees.findByIdAndUpdate(id, updateData, { new: true });

        // If the document does not exist, return a 404 error
        if (!updatedCoordonnees) {
            return res.status(404).json({ error: 'Coordonnees not found' });
        }

        // Return the updated Coordonnees document
        res.status(200).json(updatedCoordonnees);
    } catch (error) {
        console.error('Error updating Coordonnees by ID:', error);
        res.status(500).json({ error: 'Error updating Coordonnees' });
    }
};

// Controller function to delete a Coordonnees document by ID
exports.deleteCoordonneesById = async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the Coordonnees document by ID from the database
        const deletedCoordonnees = await Coordonnees.findByIdAndDelete(id);

        // If the document does not exist, return a 404 error
        if (!deletedCoordonnees) {
            return res.status(404).json({ error: 'Coordonnees not found' });
        }

        // Return the deleted Coordonnees document
        res.status(200).json(deletedCoordonnees);
    } catch (error) {
        console.error('Error deleting Coordonnees by ID:', error);
        res.status(500).json({ error: 'Error deleting Coordonnees' });
    }
};
