const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Handle OPTIONS requests
router.options('/register', (req, res) => {
  res.header('Access-Control-Allow-Methods', 'POST');
  res.status(200).send();
});

// Route for handling POST requests to "/register"
router.post('/register', registerUser);
router.post('/login', loginUser)
module.exports = router;
