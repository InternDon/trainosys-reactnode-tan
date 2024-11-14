import React from 'react';
import Star from './Star';

function Rating({ value, maximumValue = 5 }) {
  // Generate an array representing the rating (filled or empty)
  const stars = Array.from({ length: maximumValue }, (_, index) => index < value);

  return (
    <div>
      {stars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
}

export default Rating;
