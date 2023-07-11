import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form fields
    const errors = {};

    if (username.trim() === '') {
      errors.username = 'Username is required';
    }

    if (password.trim() === '') {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Form is valid, proceed with login logic
    console.log('Username:', username);
    console.log('Password:', password);

    // Reset form fields
    setUsername('');
    setPassword('');
    setErrors({});
  };

  return (
    <div className="container row login-box">
      <div className="col login-title">
        <h1>WE EXIST IN THE MOMENT</h1>
        <span className="small-text">Let's get started!</span>
      </div>
      <div className="col login-form">
        <div className="avatar">{/* <img src="https://68.media.tumblr.com/avatar_8671f0f36a5f_128.png" alt="" /> */}</div>
        <div className="registration">
          Need an Account? <Link to="/signup">Sign up</Link>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login" className="login">
            <input
              id="login"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && <div className="error">{errors.username}</div>}
          </label>
          <label htmlFor="passwd" className="passwd">
            <input
              id="passwd"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <button className="button" type="submit">
            Login In
          </button>
        </form>
        <div className="lost-passwd">
          <a href="#">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;