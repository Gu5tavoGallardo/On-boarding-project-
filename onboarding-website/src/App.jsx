import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import HomePage from './HomePage';
import LoginPage from '../../src/LoginPage';
import StaffPage from './StaffPage';
import StudentsPage from './StudentsPage';
import ProfessorsPage from './ProfessorsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [targetRoute, setTargetRoute] = useState(''); // Track the target route after login
  const navigate = useNavigate();

  // Set the target route and navigate to login
  const handleCardClick = (route) => {
    setTargetRoute(route); // Set the page the user wants to visit
    navigate('/login'); // Navigate to login page
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Mark as logged in
    navigate(targetRoute); // Redirect to the initially requested page
    setTargetRoute(''); // Clear target route after navigation
  };

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage onCardClick={handleCardClick} />} />
        <Route path="/login" element={<LoginPage onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/professors" element={<ProfessorsPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </>
  );
}

export default App;
