const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'dac',
    database: 'myProject',
    password: 'dac',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})


module.exports = pool