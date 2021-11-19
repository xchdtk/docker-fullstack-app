let mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: "mysql",
    user: 'root',
    password: 'jinsoo',
    database: "myapp"
});

exports.pool = pool;