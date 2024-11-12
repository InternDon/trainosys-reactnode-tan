import React from 'react';

function Star({ filled }) {
  return (
    <span>
      {filled ? '⭐' : '☆'}
    </span>
  );
}

export default Star;
