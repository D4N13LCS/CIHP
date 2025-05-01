const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'db',
  user: 'root',
  password: 'P3ntatonica#18',
  database: 'cihp_bd'
});

module.exports = pool;
