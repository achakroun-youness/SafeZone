const connectDB = require('./config/mongodb');
require('dotenv').config();
connectDB();
const express = require('express');
const cors = require('cors'); // Import the cors middleware
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// CORS middleware
app.use(cors());

// Routes
const coordRoutes = require('./routes/CoordinatesRoute');
app.use('/api', coordRoutes);

const zoneRoutes = require('./routes/ZonesRoute');
app.use('/api', zoneRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
