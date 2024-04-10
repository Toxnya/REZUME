import React from "react";
import './techcard.css'

const Techcard = ({ techName }) => {
    const techWord = techName.split(' ');

    return(
        <div className="technology-card">
            {techWord.map((word, index) => (
                <span key={index} className="technology-word">{word}</span>
            ))}
        </div>
    );
};

export default Techcard;