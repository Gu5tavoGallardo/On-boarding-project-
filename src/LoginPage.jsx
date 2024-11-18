// LoginPage.js

import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            // Send a POST request to the login endpoint
            const response = await axios.post('http://localhost:5000/api/login', { email, password });

            if (response.data.success) {
                onLoginSuccess(); // Call the success handler if login is successful
            } else {
                setError(response.data.message); // Display error message from the server
            }
        } catch (err) {
            setError('Error logging in'); // General error message if request fails
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginPage;
