// MODIFIED - changed items and related terms to 'heartbeats" and related terms
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const PORT = 3000; // Set your desired port number

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy data to simulate a database
let heartbeats = [];

// POST endpoint to add an item
app.post('/heartbeats', (req, res) => {
  const heartbeat = req.body;
  heartbeats.push(heartbeat);
  res.status(201).json({ message: 'Heartbeat added successfully', heartbeat: heartbeat });
});

// GET endpoint to retrieve all items
app.get('/heartbeats', (req, res) => {
  res.status(200).json(heartbeats);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});