import React, { useState, useEffect } from 'react';
import '../App.css';

const MousePosition = () => {
    // State to store mouse position
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Handler function to update position when mouse moves
        const handleMouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        // Add event listener for mousemove
        document.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Empty dependency array ensures this runs only once

    return (
        <div className="mouse-container">
            <div className="position-box">
                <h1>Mouse Position</h1>
                <p>X: {position.x}</p>
                <p>Y: {position.y}</p>
            </div>
        </div>
    );
}

export default MousePosition;
