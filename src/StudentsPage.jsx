import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentsPage.css';

function StudentsPage() {
  const navigate = useNavigate();

  return (
    <div className="students-page-container">
      <h1 className="students-page-title">Welcome to the Students Page</h1>
      <p className="students-page-description">
        This page is designed specifically for students to help them with onboarding, providing all the necessary resources and guidance to get started.
      </p>
      <button onClick={() => navigate("/")} className="students-back-button">
        Back to Home
      </button>
    </div>
  );
}

export default StudentsPage;