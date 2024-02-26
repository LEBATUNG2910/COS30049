const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const mongoose = require('mongoose'); // Fix this line
const app = express(); 
const cookieParser = require('cookie-parser')

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

// Handle preflight OPTIONS requests
app.options('*', cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://user123:laungocquyendeptrai123@ngocquyen.iyqgw2p.mongodb.net/app?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database: ", error);
  });

// Middleware
app.use(express.json());
app.use(cookieParser()); 
app.use(express.urlencoded({extended: false})); 
// Routes
app.use('/', require('./routes/authRoutes'));

// Start the server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
