import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StaffPage.css';

function StaffPage() {
  const navigate = useNavigate();

  return (
    <div className="staff-page-container">
      <h1 className="staff-page-title">Welcome to the Staff Page</h1>
      <p className="staff-page-description">
        This page is for staff members, providing them with resources and tools to ensure a smooth onboarding experience and help them excel in their roles.
      </p>
      <button onClick={() => navigate("/")} className="staff-back-button">
        Back to Home
      </button>
    </div>
  );
}

export default StaffPage;