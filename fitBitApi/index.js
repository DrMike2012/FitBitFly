
// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const PORT = 3000; // Set your desired port number

// Middleware to parse JSON bodies
app.use(express.json());

// Dummy data to simulate a database
let items = [];

// POST endpoint to add an item
app.post('/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json({ message: 'Item added successfully', item: newItem });
});

// GET endpoint to retrieve all items
app.get('/items', (req, res) => {
  res.status(200).json(items);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});