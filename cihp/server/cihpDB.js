const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost", 
    port: 3306,
    user: "root",
    password: "P3ntatonica#18",
    database: "cihp_bd"
})


module.exports = {pool};