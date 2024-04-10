import React from 'react';
import './big.css';

const Bigcard = ({photoUrl, fullName}) => {
    return (
        <div className="big-card">
            <img src={photoUrl} alt="User" />
            <h2>{fullName}</h2>
        </div>
    );
};

export default Bigcard;