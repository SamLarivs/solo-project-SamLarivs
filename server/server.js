const db = require('./models/WhoDisModels');
const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();
const apiRouter = require('./routes/api');

const PORT = 3000;

// Handle parsing request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the client directory
app.use(express.static(path.resolve(__dirname, '../client'))); // Fix _dirname to __dirname

// Set up API routes
//app.use('/api', apiRouter);

app.get('/api/', async (req, res) => {
    try {
        const people = await db.query('SELECT * FROM people');
        res.json(people.rows);
    } catch (error) {
        console.error('Error fetching people:', error);
        res.status(500).json({ error: 'Failed to fetch people' });
    }
});

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
    console.error(errorObj.log); // Changed to console.error for error logging
    return res.status(errorObj.status).json(errorObj.message);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;