import React from 'react';
import { heroData } from '../data';

const Hero = () => {
  return (
    <header className="hero">
        <img src={heroData.imageUrl} alt="Hero" />
        <div className="hero-card">
            <h1>{heroData.headline}</h1>
            <p>{heroData.subheadline}</p>
            <button className="btn btn-black">{heroData.buttonText}</button>
        </div>
    </header>
  );
};

export default Hero;