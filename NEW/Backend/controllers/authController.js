const User = require("../models/User");
const { hashPassword, comparePassword } = require('../helpers/auth');
// const jwt = require('jsonwebtoken')
// Register End Point //
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if name was entered
    if (!name) {
      return res.status(400).json({
        error: "Name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        error: "Password is required and should be at least 6 characters long",
      });
    }

    // Check if email exists
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({
        error: "Email is already taken",
      });
    } 
    // Hash the password
    const hashedPassword = await hashPassword(password);
    // Create user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword, // Save the hashed password, not the hashPassword function
    });

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred during registration",
    });
  }
};




//  Login End Point  //   
const loginUser = async (req, res) => {  
  try {
    const {email, password} = req.body;  

    // Check if user exists 
    const user = await User.findOne({email}); 
    if(!user) { 
      return res.json({ 
        error: 'No user found'
      })
    } 
 // Check if password matches  
 const match = await comparePassword(password, user.password);
 if (match) {  
   return res.status(200).json(user);
 } else  {
   return res.status(401).json({ error: 'Incorrect password' });
 }
} catch (error) {
 return res.status(500).json({ error: 'An error occurred during login' });
}
}



module.exports = {
  registerUser, 
  loginUser
};

