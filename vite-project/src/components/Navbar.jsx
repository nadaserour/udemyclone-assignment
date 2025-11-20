import React from 'react';
import { navbarLinks } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy" className="logo" />
            <span className="explore-link">Explore</span>
        </div>
        
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder="Search for anything" />
        </div>

        <div className="nav-links">
            <a href="#" className="nav-item">Plans & Pricing</a>
            {navbarLinks.map((link, index) => (
                <a href="#" key={index} className="nav-item">{link}</a>
            ))}
            <a href="#" className="nav-item"><i className="fa-solid fa-cart-shopping"></i></a>
            <button className="btn btn-white">Log in</button>
            <button className="btn btn-black">Sign up</button>
            <button className="btn btn-white"><i className="fa-solid fa-globe"></i></button>
        </div>
    </nav>
  );
};

export default Navbar;