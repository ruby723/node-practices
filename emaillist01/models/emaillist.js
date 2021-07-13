const mysql = require('mysql2');
const util = require('util');
const dbconn = require('./dbconn');
const promisify = function(f){
    return function(){
        return new Promise(function(resolve,reject){
            f.apply(arguments, function(){
                this
            });
        });
    }
}
module.exports = {
    findAll: async function() {
        const conn = dbconn();
        // const query = (sql, data) => new Promise(function(resolve, reject){
        //        conn.query(sql, data, (error, rows, field) => 
        //            error ? reject(error):resolve(rows)
        //            )
        // });

        const query = util.promisify(conn.query).bind(conn);
        try {
            /*
            */
            const results = await query("select first_name as firstName, last_name as lastName, email from emaillist order by no desc", []);
            return results;    
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    },
    insert: async function(emaillist) {
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try {
            return await query(
                "insert into emaillist values(null,?,?,?)",
                Object.values(emaillist)
                // [emaillist.fn,emaillist.ln,emaillist.email]
            );
        } catch(e) {
            console.error(e);
        } finally {
            conn.end();
        }
    }
}