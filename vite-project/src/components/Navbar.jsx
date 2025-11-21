import React from 'react';
import { navbarLinks, navLogoData } from '../data';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-left">
            <img src={navLogoData.logoUrl} alt="Udemy" className="logo" />
            <span className="explore-link">{navLogoData.exploreText}</span>
        </div>
        
        <div className="search-bar">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder="Search for anything" />
        </div>

        <div className="nav-links">
           
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
