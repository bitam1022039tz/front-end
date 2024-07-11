import React from 'react';
import './RegistrationForm.css';
import { useNavigate } from 'react-router-dom';


const RegistrationForm = () => {
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/')
  }

  return (
    <div className="form-container">
      <p className="title">Register</p>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" className="input" placeholder="Full Name" />
        <input type="text" className="input" placeholder="Username" />
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <input type="password" className="input" placeholder="Confirm Password" />
        <button className="form-btn">Register</button>
      </form>
     
    </div>
  );
};

export default RegistrationForm;