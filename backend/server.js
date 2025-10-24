const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// --- Middleware ---

// 1. CORS Middleware
// This tells your server to accept requests from your Vercel frontend
app.use(cors({
  origin: "https://task-manager-app-zeta-eight.vercel.app" 
  // Make sure this is your correct Vercel URL
}));

// 2. Body Parser Middleware
// This allows your server to read JSON data from requests
app.use(express.json());

// --- Database Connection ---
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB database connection established successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// --- API Routes ---
// Make sure your route files exist in the 'routes' folder
app.use('/api/auth', require('./routes/auth'));
app.use('/api/tasks', require('./routes/tasks')); // Assuming you have task.js

// --- Server Listening ---
// This is the CRITICAL fix for Render
// It uses the PORT that Render gives, or 5000 as a fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});