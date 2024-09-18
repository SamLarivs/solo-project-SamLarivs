const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

// Use CORS middleware
app.use(cors());

// Handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the client directory
app.use(express.static(path.resolve(__dirname, '../client')));

// Set up API routes
app.use('/api', apiRouter);

// Handle 404 errors
app.use((req, res) => res.status(404).send('Page Not Found'));

// Centralized error handling middleware
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.error(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;