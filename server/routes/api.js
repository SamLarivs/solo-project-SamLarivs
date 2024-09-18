const express = require('express');
const WhoDisController = require('../controllers/WhoDisController');

const router = express.Router();

// API route to get people data
router.get('/', 
    WhoDisController.getPeople, // Call the controller method to get people
    (req, res) => res.status(200).json() // Send the retrieved people as JSON
);

module.exports = router; // Export the router for use in your main application