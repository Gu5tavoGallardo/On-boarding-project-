const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',              // Ensure this is the correct username
    password: 'Ggcool00231459!', // Ensure this is the correct password
    database: 'onboarding'  // Ensure this is the correct database name
});


// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the SQL database.');
});

// Export the connection for use in other files
module.exports = connection;
