import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const { login } = useContext(ShopContext);
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const toggleView = () => {
    setIsSignup(!isSignup);
    setFormData({
      name: '',
      email: '',
      password: '',
      agree: false,
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (isSignup && !formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    if (isSignup && !formData.agree) {
      newErrors.agree = 'You must agree to the terms.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const userData = { name: formData.name, email: formData.email };
      login(userData); // Update user context
      navigate('/account', { state: userData }); // Redirect with user data
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {isSignup && (
              <>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}
              </>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          {isSignup && (
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                name="agree"
                id="terms"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label htmlFor="terms">
                By continuing, I agree to the terms of use and privacy policy.
              </label>
              {errors.agree && <p className="error">{errors.agree}</p>}
            </div>
          )}
          <button type="submit">{isSignup ? 'Continue' : 'Login'}</button>
        </form>
        <p className="loginsignup-toggle">
          {isSignup
            ? 'Already have an account? '
            : "Don't have an account? "}
          <span onClick={toggleView}>
            {isSignup ? 'Login Here' : 'Sign Up Here'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
