import express from 'express';
import process from 'node:process';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

// Add your middleware
// app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});

const express = require('express');
const rateLimitingMiddleware = require('./middleware/rateLimitingMiddleware');

// Apply the rate limiting middleware globally (for all routes)
app.use(rateLimitingMiddleware);

// Example route
app.get('/', (req, res) => {
  res.send('Welcome to the rate-limited API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

