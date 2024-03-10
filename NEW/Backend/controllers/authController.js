  const { registerUser, loginUser } = require('../models/user');
  const { hashPassword, comparePassword } = require('../helpers/auth');

  const registerUserController = async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if name, email, and password are provided
      if (!name || !email || !password) {
        return res.status(400).json({ error: "Name, email, and password are required" });
      }

      // Hash the password
      const hashedPassword = await hashPassword(password);

      // Register the user
      const result = await registerUser(name, email, hashedPassword);

      if (result.error) {
        return res.status(500).json({ error: result.error });
      }

      return res.status(200).json({ message: "Registration successful" });
    } catch (error) {
      console.error("Error registering user:", error);
      return res.status(500).json({ error: "An error occurred during registration" });
    }
  };

  const loginUserController = async (req, res) => {
    try {
      const { email, password } = req.body; 
      
  
      console.log("Received login request with email:", email);
  
      // Check if email and password are provided
      if (!email || !password) {
        console.log("Missing email or password in login request");
        return res.status(400).json({ error: "Email and password are required" });
      }
  
      // Attempt to log in the user
      console.log("Attempting to log in user with email:", email);
      const result = await loginUser(email, password);
  
      console.log("Login result:", result);
  
      // Check if login was successful
      if (result.error) {
        console.log("Login failed:", result.error);
        // If login failed, return 401 Unauthorized
        return res.status(401).json({ error: result.error });
      }
  
      // If login successful, return 200 OK with user information
      console.log("Login successful");
      return res.status(200).json({ message: "Login successful", user: result.user });
    } catch (error) {
      console.error("Error logging in user:", error);
      // If an error occurred during login, return 500 Internal Server Error
      return res.status(500).json({ error: "An error occurred during login" });
    }
  };
  

  module.exports = {
    registerUserController,
    loginUserController,
  };
// q