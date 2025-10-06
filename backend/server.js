// server.js

// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Initialize the app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows the frontend to talk to this backend
app.use(express.json()); // Allows the server to accept JSON data

// --- Database Connection ---
const uri = process.env.MONGO_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// --- API Routes ---
// This is the new line for the authentication routes
app.use('/api/auth', require('./routes/auth'));

// This is your existing tasks route
const tasksRouter = require('./routes/tasks');
app.use('/api/tasks', tasksRouter); // All task-related requests will go to /api/tasks

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});