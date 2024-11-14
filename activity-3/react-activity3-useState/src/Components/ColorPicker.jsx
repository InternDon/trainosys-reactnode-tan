import React, { useState } from 'react';
import '../App.css';

const ColorPicker = () => {

  // State to track the selected color
  const [color, setColor] = useState('red');

  // Update color based on selection
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="color-picker">
      <label htmlFor="color-select">Choose a color:</label>
      <select id="color-select" value={color} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
        <option value="gold">Gold</option>
      </select>
      <div className="color-display" style={{ backgroundColor: color }}>
        {color}
      </div>
    </div>
  );
}

export default ColorPicker;
