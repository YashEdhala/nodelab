
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Endpoint to wake up the server
app.get('/wake-up', (req, res) => {
    res.json({ message: 'Server is awake!' });
});

// Endpoint to roll a dice
app.get('/roll-dice', (req, res) => {
    const sides = parseInt(req.query.sides) || 6;
    const result = Math.floor(Math.random() * sides) + 1;
    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
