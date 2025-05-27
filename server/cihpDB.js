const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: 'P3ntatonica#18',
  database: 'cihp_db'
});

module.exports = pool;
