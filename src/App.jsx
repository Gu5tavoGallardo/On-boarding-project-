// App.js

import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import StaffPage from './StaffPage';
import StudentsPage from './StudentsPage';
import ProfessorsPage from './ProfessorsPage';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [targetRoute, setTargetRoute] = useState('');
    const navigate = useNavigate();

    const handleCardClick = (route) => {
        setTargetRoute(route);
        navigate('/login');
    };

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        navigate(targetRoute);
        setTargetRoute('');
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage onCardClick={handleCardClick} />} />
                <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/students" element={isLoggedIn ? <StudentsPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/professors" element={isLoggedIn ? <ProfessorsPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
                <Route path="/staff" element={isLoggedIn ? <StaffPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />} />
            </Routes>
        </>
    );
}

export default App;
