const mysql = require('mysql2');

module.exports = function(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'webdb',
        port : 3306,
        database:'webdb',
        password:'webdb'
    });
}