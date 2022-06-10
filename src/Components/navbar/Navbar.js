import React from 'react'
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
      <nav className = "navbar">
        <nav className="logo-nav ">
        <img src={logo} width="150" height="50"alt="company"/>
        </nav>
      </nav>
  )
}

export default Navbar;