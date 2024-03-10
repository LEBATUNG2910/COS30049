// db.js

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'ngocquyen',
});

module.exports = pool;
// q