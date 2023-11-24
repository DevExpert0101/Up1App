import React from 'react';
import './LCDclock.css'; // Ensure this CSS file is created and linked

const Digit = ({ value }) => {
  return (
    <div className="digit" key={value}>
      <div className="digit-value">{value}</div>
    </div>
  );
};

export default Digit;
