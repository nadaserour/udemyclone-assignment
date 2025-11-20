import React from 'react';
import { skillsData } from '../data';

const Skills = () => {
  return (
    <section className="skills-section">
        <div className="skills-text-content">
            <h2>Learn essential career and life skills</h2>
            <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
        </div>
        <div className="skills-cards-container">
            {skillsData.map((skill) => (
                <div className="skill-card" key={skill.id}>
                    <img src={skill.image} alt={skill.title} className="skill-bg" />
                    <div className="skill-card-overlay">
                        <div className="skill-learners">
                             <i className="fa-solid fa-user-group"></i> {skill.learners}
                        </div>
                        <div className="skill-card-footer">
                            <h4>{skill.title}</h4>
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Skills;