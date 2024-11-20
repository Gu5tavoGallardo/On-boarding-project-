import React, { useState } from 'react';
import axios from 'axios';

function LoginPage({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        // Validate form fields
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }

        setLoading(true);
        setError(null); // Clear previous errors

        try {
            // Send a POST request to the login endpoint
            const response = await axios.post('http://localhost:5000/api/login', { email, password });

            if (response.data.success) {
                onLoginSuccess(); // Call the success handler if login is successful
            } else {
                setError(response.data.message); // Display error message from the server
            }
        } catch (err) {
            console.error(err); // Log the error for debugging
            setError('Error logging in'); // General error message if request fails
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '8px', margin: '8px 0' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '8px', margin: '8px 0' }}
            />
            <button
                onClick={handleLogin}
                disabled={loading}
                style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: loading ? '#ccc' : '#007BFF',
                    color: '#fff',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                }}
            >
                {loading ? 'Logging in...' : 'Login'}
            </button>
        </div>
    );
}

export default LoginPage;
