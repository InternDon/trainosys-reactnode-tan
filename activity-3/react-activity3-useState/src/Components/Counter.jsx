import React, { useState, useEffect } from 'react';
import '../../src/App.css'

const Counter = () => {
  // Retrieve initial counter value from localStorage or set it to 0
  const initialCount = Number(localStorage.getItem('counterValue')) || 0;
  const [count, setCount] = useState(initialCount);
  const [step, setStep] = useState(1);

  // Update localStorage whenever count changes
  useEffect(() => {
    localStorage.setItem('counterValue', count);
  }, [count]);

  // Increment and Decrement functions
  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);

  // Handle step change
  const handleStepChange = (event) => {
    const newStep = Number(event.target.value);
    if (newStep > 0) {
      setStep(newStep);
    }
  };

  // Conditional styling based on the count value
  const counterStyle = {
    color: count > 0 ? 'gold' : count < 0 ? 'red' : 'black',
    fontWeight: 'bold',
    fontSize: '2em',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div className="counter-container">
      <div style={counterStyle}>{count}</div>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div className="stepper">
        <label className='labelName'>
          Step:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            min="1"
          />
        </label>
      </div>
    </div>
  );
}

export default Counter;
