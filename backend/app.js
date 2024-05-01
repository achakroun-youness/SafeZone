const connectDB = require('./config/mongodb');
const express = require('express');
const app = express();
require('dotenv').config();
connectDB();

const cors = require('cors');


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.use(cors({
    origin: 'http://localhost:8081'
  }));


// Middleware to parse JSON bodies
app.use(express.json());

// Routes
const coordRoutes = require('./routes/CoordinatesRoute');
app.use('/api', coordRoutes);

const zoneRoutes = require('./routes/ZonesRoute');
app.use('/api', zoneRoutes);

    
// Start the server
const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});