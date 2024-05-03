// MODIFIED - changed items and related terms to 'heartbeats" and related terms
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const PORT = 3000; // Set your desired port number

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy data to simulate a database
let heartrate = 0;

// POST endpoint to add an item
app.post('/heartrate', (req, res) => {
  const heartbeat = req.body.heartrate;
  console.log(heartbeat);
  heartrate = heartbeat;
  res.status(201).json({ message: 'Heartbeat added successfully', heartbeat: heartbeat });
});

// GET endpoint to retrieve all items
app.get('/heartrate', (req, res) => {
  res.status(200).json({
    "heartrate": heartrate
});
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});