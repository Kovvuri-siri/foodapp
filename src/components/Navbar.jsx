import React from 'react';
const Navbar = ({ cartCount }) => (
  <nav className="navbar">
    <h1>Foodie Express</h1>
    <div className="cart">🛒 {cartCount}</div>
  </nav>
);
export default Navbar;