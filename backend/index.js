// index.js

const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS to allow requests from your React front end
const cors = require('cors');
app.use(cors());

// Create connection to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'yourUsername',        // Replace with your MySQL username
    password: 'yourPassword',    // Replace with your MySQL password
    database: 'yourDatabase'     // Replace with your MySQL database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('MySQL Connected...');
});

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

// POST endpoint for login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    // Hardcoded credentials for testing
    const hardcodedEmail = 'testuser@gmail.com';
    const hardcodedPassword = 'testpassword';

    // Check against hardcoded credentials
    if (email === hardcodedEmail && password === hardcodedPassword) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Incorrect username or password' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
