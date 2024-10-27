import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './Header';
import Card from './Card';
import StaffPage from './StaffPage';
import StudentsPage from './StudentsPage';
import ProfessorsPage from './ProfessorsPage';
import tamiuLogo from './assets/tamiu logo.jpeg';

function App() {
  const navigate = useNavigate(); // useNavigate should work within Router context

  const handleStudentClick = () => navigate("/students");
  const handleProfessorClick = () => navigate("/professors");
  const handleStaffClick = () => navigate("/staff");

  return (
    <>
      <Header />
      <div className="container">
        <div className="card-container">
          <Card
            title="Students"
            text="This is for students and helps students"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleStudentClick}
          />
          <Card
            title="Professors"
            text="This is for professors and helps professors"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleProfessorClick}
          />
          <Card
            title="Staff"
            text="This is for staff and helps staff"
            image={tamiuLogo}
            buttonText="Learn More"
            onButtonClick={handleStaffClick}
          />
        </div>
      </div>

      {/* Routes for navigation */}
      <Routes>
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/professors" element={<ProfessorsPage />} />
        <Route path="/staff" element={<StaffPage />} />
      </Routes>
    </>
  );
}

export default App;
