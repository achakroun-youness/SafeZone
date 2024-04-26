// Import necessary modules
const express = require('express');
const Coordonnees = require('../models/Coordonnees');
const Zone = require('../models/Zone');


// Create a new router instance
const router = express.Router();

// Define a route for creating a new zone with coordinates
router.post("/", async (req, res) => {
    try {
        // Extract coordinates array from the request body
        const { coordinates } = req.body;

        // Validate that coordinates is an array
        if (!Array.isArray(coordinates)) {
            return res.status(400).json({ error: "Coordinates must be an array" });
        }

        // Create an array to store new Coordonnees objects
        const newCoordonneesArray = [];

        // Loop through each coordinate object in the array
        for (const coord of coordinates) {
            // Extract longitude, latitude, and order from the coordinate object
            const { longitude, latitude, order } = coord;

            // Create a new Coordonnees object with the extracted data
            const newCoordonnees = new Coordonnees({
                longitude,
                latitude,
                order,
            });

            // Save the new Coordonnees object to the database
            const savedCoordonnees = await newCoordonnees.save();

            // Push the saved Coordonnees object to the array
            newCoordonneesArray.push(savedCoordonnees._id);
        }

        // Create a new Zone object with the array of Coordonnees object IDs
        const newZone = new Zone({
            coordinates: newCoordonneesArray,
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
});

// Export the router
module.exports = router;