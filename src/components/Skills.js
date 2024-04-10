import React from 'react';
import './Skills.css';

const Skills = ({skillName}) => {
    return (
        <div className="skill-card">
            <h3>{skillName}</h3>
        </div>
    );
};

export default Skills;