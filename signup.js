import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    const errors = {};

    if (email.trim() === '') {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (confirmPassword.trim() === '') {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Form is valid, proceed with sign-up logic
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    // Reset form fields
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors({});
    setShowPopup(true);
  };

  return (
    <div className="container row login-box">
      <div className="col login-title">
        <h1>Unlock the magic of your next event</h1>
        <span className="small-text">Let's get started!</span>
      </div>
      <div className="col login-form">
        <div className="avatar">{/* <img src="https://68.media.tumblr.com/avatar_8671f0f36a5f_128.png" alt="" /> */}</div>
        <div className="registration">
          Already have an account?<Link to="/">Login</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="login">
            <input
              id="email"
              type="email"s
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
          <label htmlFor="password" className="passwd">
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <label htmlFor="confirmPassword" className="passwd">
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </label>
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => setShowPopup(false)}>
                &times;
              </span>
              <p>Sign up successful! You can now log in.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignUp;