const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password", // << Change this password (✿◠‿◠) 
    database: 'webapp'  // << Change this database name (っ＾▿＾)💨
});

conn.connect();

module.exports = conn;