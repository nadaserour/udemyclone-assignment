import React from 'react';
import { companiesLogos } from '../data';

const TrustedCompanies = () => {
  return (
    <section className="trusted-companies">
        <p>Trusted by over 16,000 companies and millions of learners around the world</p>
        <div className="logos-container">
            {companiesLogos.map((logo, index) => (
                <img key={index} src={logo} alt="Company Logo" className="company-logo"/>
            ))}
        </div>
    </section>
  );
};

export default TrustedCompanies;