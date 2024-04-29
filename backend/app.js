const connectDB = require('./config/mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const Zone = require('./models/Zone');

const Coordonnees = require('./models/Coordonnees');

require('dotenv').config();
connectDB();

// Middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Define a route for creating new coordinates
app.post("/coordinates", async (req, res) => {
    try {
        // Extract longitude, latitude, and order from the request body
        const { longitude, latitude, order } = req.body;

        // Create a new Coordonnees object with the extracted data
        const newCoordonnees = new Coordonnees({
            longitude,
            latitude,
            order,
        });

        // Save the new coordinates to the database
        const savedCoordonnees = await newCoordonnees.save();

        // Respond with the saved coordinates
        res.status(201).json(savedCoordonnees);
    } catch (err) {
        // Handle any errors
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});


// Define a route for creating a new zone with coordinates
app.post("/zones", async (req, res) => {
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

            // Push the saved Coordonnees object ID to the array
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




// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});