const connectDB=require('./config/mongodb');
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

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
  

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});