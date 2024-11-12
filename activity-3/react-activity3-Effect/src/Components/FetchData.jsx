import React, { useState, useEffect } from 'react';
import '../App.css'; // Import the CSS file for styling

const FetchData = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Fetch data from API using useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const result = await response.json();
        setData(result); // Update state with the fetched data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoading(false); // Stop loading if there's an error
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="fetch-container">
      <h1>Fetched Todo List</h1>
      {loading ? (
        <p>Loading...</p> // Display loading text if data is still being fetched
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li> // Render each item in the list
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchData;
