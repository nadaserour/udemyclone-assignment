import React from 'react';
import { aiBannerData } from '../data';

const AIBanner = () => {
  return (
    <section className="ai-banner">
        <div className="ai-content">
            <h2>{aiBannerData.title}</h2>
            <p>{aiBannerData.text}</p>
            <div className="ai-features">
                {aiBannerData.features.map((feat, idx) => (
                    <div key={idx} className="ai-feature-item">
                        <i className="fa-solid fa-circle-check"></i> {feat}
                    </div>
                ))}
            </div>
            <button className="btn btn-white">Learn more</button>
        </div>
        <div className="ai-image">
             <img src={aiBannerData.imageUrl} alt="AI Banner" />
        </div>
    </section>
  );
};

export default AIBanner;