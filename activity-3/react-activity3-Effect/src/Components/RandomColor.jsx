import React, { useState, useEffect } from 'react';
import '../App.css'; // Import the CSS file

const RandomColor = () => {
  // State variable to store color
  const [color, setColor] = useState('red'); // Initial color

  useEffect(() => {
    // Function to generate a random color
    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Set interval to update color every 3 seconds
    const interval = setInterval(() => {
      setColor(getRandomColor());
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="random-container">
      <div className="color-box" style={{ backgroundColor: color }}>
        <h1>Current Color: {color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;
