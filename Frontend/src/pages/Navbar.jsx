import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>GreenRemedy</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navlist">
      <ul className='flex gap-10 text-[rgb(56 255 56)]' >
        <li><a href="" className='hover:bg-green-950 px-4 py-2 rounded-lg transition-all'>Home</a></li>
        <li><a href="">Explore</a></li>
        <li><a href="">About Us</a></li>
        <li><a href="">Contact Us</a></li>
      </ul>
      </div>
      <div className="navbar-login">
        <button className="login-btn">Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
