import React from 'react';
import './LoginForm.css'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/Dashboard')
  }

  return (
    <div className="form-container">
      <p className="title">Welcome back</p>
      <form onSubmit={handleSubmit} className="form">
        <input type="email" className="input" placeholder="Email" />
        <input type="password" className="input" placeholder="Password" />
        <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p>
        <button className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account?<span className="sign-up-link"><Link to='/RegistrationForm'>Sign up</Link></span>
      </p>
    </div>
  );
};

export default LoginForm;
