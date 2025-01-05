import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState('shop');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user, logout, getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Function to clear user data
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Consumerist" />
        <p>CONSUMERIST</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => setMenu('shop')}
          className={menu === 'shop' ? 'active' : ''}
        >
          <Link style={{ textDecoration: 'none' }} to="/">
            Shop
          </Link>
          {menu === 'shop' ? <hr /> : null}
        </li>
        <li
          onClick={() => setMenu('mens')}
          className={menu === 'mens' ? 'active' : ''}
        >
          <Link style={{ textDecoration: 'none' }} to="/mens">
            Men
          </Link>
          {menu === 'mens' ? <hr /> : null}
        </li>
        <li
          onClick={() => setMenu('womens')}
          className={menu === 'womens' ? 'active' : ''}
        >
          <Link style={{ textDecoration: 'none' }} to="/womens">
            Women
          </Link>
          {menu === 'womens' ? <hr /> : null}
        </li>
        <li
          onClick={() => setMenu('kids')}
          className={menu === 'kids' ? 'active' : ''}
        >
          <Link style={{ textDecoration: 'none' }} to="/kids">
            Kids
          </Link>
          {menu === 'kids' ? <hr /> : null}
        </li>
      </ul>
      <div className="nav-login-cart">
        {user ? (
          <div className="nav-user">
            <button
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="user-dropdown-button"
            >
              {user.name}
            </button>
            {isDropdownOpen && (
              <div className="user-dropdown-menu">
                <button onClick={handleLogout} className="logout-button">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        )}
        <Link to="/cart">
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
