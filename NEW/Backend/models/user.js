const pool = require('../routes/db') 

const { comparePassword } = require('../helpers/auth'); // Importing comparePassword function

const registerUser = async (name, email, password) => {
  try {
    const connection = await pool.getConnection();
    await connection.query('INSERT INTO userinfo (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
    connection.release();
    return { success: true };
  } catch (error) {
    console.error('Error registering user:', error);
    return { error: 'An error occurred during registration' };
  }
};


const loginUser = async (email, password) => {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query('SELECT * FROM userinfo WHERE email = ?', [email]);
      connection.release();
  
      if (rows.length === 0) {
        return { error: 'No user found with this email' };
      }
  
      const user = rows[0];
  
      // Ensure user password exists before comparing
      if (!user.password) {
        return { error: 'No password set for this user' };
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await comparePassword(password, user.password);
  
      if (!passwordMatch) {
        return { error: 'Incorrect password' };
      }
  
      return { success: true, user };
    } catch (error) {
      console.error('Error logging in user:', error);
      return { error: 'An error occurred during login' };
    }
  };
  

module.exports = {
  registerUser,
  loginUser,
};
// q