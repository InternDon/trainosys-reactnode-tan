import React, { useState, useEffect } from 'react';

const Counter = () => {
  // State for count, initialized to 0
  const [count, setCount] = useState(0);

  // useEffect hook to log count whenever it changes
  useEffect(() => {
    console.log(`Current count is: ${count}`);
  }, [count]); 

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter-container">
    <div className="counter-box">
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  </div>
  );
}

export default Counter;
