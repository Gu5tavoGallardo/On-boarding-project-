const express = require('express');
const app = express();
const db = require('./db'); // Import the database connection
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// GET endpoint to fetch all records from the "users" table
app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('Server error');
            return;
        }
        res.json(results); // Send the fetched data as JSON
    });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded credentials for testing
    const hardcodedEmail = 'testuser@gmail.com';
    const hardcodedPassword = 'testpassword';

    if ( email === hardcodedEmail && password === hardcodedPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Incorrect username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
