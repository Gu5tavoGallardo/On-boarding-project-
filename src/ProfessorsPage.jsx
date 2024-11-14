import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProfessorsPage.css';

function ProfessorsPage() {
  const navigate = useNavigate();

  return (
    <div className="professors-page-container">
      <h1 className="professors-page-title">Welcome to the Professors Page</h1>
      <p className="professors-page-description">
        This page is designed for professors to provide them with resources and guidance tailored to their onboarding and ongoing support needs.
      </p>
      <button onClick={() => navigate("/")} className="professors-back-button">
        Back to Home
      </button>
    </div>
  );
}

export default ProfessorsPage;