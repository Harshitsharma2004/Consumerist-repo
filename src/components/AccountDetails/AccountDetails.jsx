import React from 'react';
import { useLocation } from 'react-router-dom';
import './AccountDetails.css';

const AccountDetails = () => {
  const location = useLocation();
  const { name, email } = location.state || {};

  return (
    <div className="account-details">
      <div className="account-details-container">
        <h1>Welcome to Your Account</h1>
        {name && <p><strong>Name:</strong> {name}</p>}
        {email && <p><strong>Email:</strong> {email}</p>}
        <a href="/" className="account-details-button">Continue Shopping</a>
      </div>
    </div>
  );
};

export default AccountDetails;
