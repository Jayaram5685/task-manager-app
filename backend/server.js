const express = require('express');
const cors = require('cors'); // <-- ADD THIS LINE

const app = express();

// ADD THESE LINES
app.use(cors({
  origin: "https://task-manager-app-zeta-eight.vercel.app"
}));

app.use(express.json()); // You should already have this