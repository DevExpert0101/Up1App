import React, { useState, useEffect } from 'react';
import Digit from './Digit'; // Import the Digit component
import './LCDclock.css';

const LCDclock = ({color}) => {
  const [currentTime, setCurrentTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    return time < 10 ? '0' + time : time.toString();
  };

  return (
    <div className="lcd-clock fs-4">
        <div className='d-flex' style={{border: '2px solid #b3a3ff', borderRadius: '3px'}}>
            <Digit value={formatTime(currentTime.minutes)[0]} color={color}/>
            <Digit value={formatTime(currentTime.minutes)[1]} color={color}/>
        </div>
      <div className="separator" style={{ color: "#b3a3ff"}}>:</div>
      <div className='d-flex' style={{border: '2px solid #b3a3ff', borderRadius: '3px'}}>
        <Digit value={formatTime(currentTime.seconds)[0]} color={color}/>
        <Digit value={formatTime(currentTime.seconds)[1]} color={color}/>
      </div>
    </div>
  );
};

export default LCDclock;
