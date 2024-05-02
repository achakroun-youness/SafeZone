const connectDB = require('./config/mongodb');
require('dotenv').config();
connectDB();
const express = require('express');
const app = express();


// Middleware to parse JSON bodies
app.use(express.json());

const cors = require('cors');
// Allow all origins
// app.use(cors());
// Or specify allowed origins
app.use(cors({
  origin: 'http://localhost:8081',
}));


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