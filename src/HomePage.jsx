// HomePage.jsx
import React from 'react';
import Card from './Card';
import tamiuLogo from './assets/tamiu logo.jpeg';
import { useNavigate } from 'react-router-dom';

function HomePage({ onCardClick }) {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    onCardClick(route); // Pass the target route to the parent
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="container">
      <div className="card-container">
        <Card
          title="Students"
          text="This is for students and helps students"
          image={tamiuLogo}
          buttonText="Login"
          onButtonClick={() => handleCardClick('/students')}
        />
        <Card
          title="Professors"
          text="This is for professors and helps professors"
          image={tamiuLogo}
          buttonText="Login"
          onButtonClick={() => handleCardClick('/professors')}
        />
        <Card
          title="Staff"
          text="This is for staff and helps staff"
          image={tamiuLogo}
          buttonText="Login"
          onButtonClick={() => handleCardClick('/staff')}
        />
      </div>
    </div>
  );
}

export default HomePage;