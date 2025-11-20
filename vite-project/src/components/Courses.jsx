import React, { useState } from 'react';
import { courseTabs, coursesByCategory } from '../data';

const Courses = () => {
  const [activeTab, setActiveTab] = useState("Artificial Intelligence (AI)");

  return (
    <section className="courses-section">
        <div className="courses-header">
            <h2>Skills to transform your career and life</h2>
            <p>From critical skills to technical topics, Udemy supports your professional development.</p>
        </div>

        {}
        <div className="tabs">
            {courseTabs.map((tab) => (
                <button 
                    key={tab} 
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>

        {}
        <div className="course-container">
            <div className="course-list">
                {coursesByCategory[activeTab]?.map((course) => (
                    <div className="course-card" key={course.id}>
                        <img src={course.image} alt={course.title} />
                        <div className="course-info">
                            <div className="course-title">{course.title}</div>
                            <div className="course-author">{course.author}</div>
                            <div className="course-rating">
                                <span>{course.rating}</span>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star-half-stroke"></i>
                                <span style={{color: '#6a6f73', fontWeight:'400', fontSize:'12px'}}>{course.reviews}</span>
                            </div>
                            <div className="course-price">{course.price}</div>
                            {course.tag && <div className="course-tag">{course.tag}</div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Courses;