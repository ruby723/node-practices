const mysql = require('mysql2');
const util = require('util');
const dbconn = require('./dbconn');
const promisify = function(f){
    return function(){
        return new Promise(function(resolve,reject){
            f.apply(arguments,function(){
                this
            });
        });
    }
}
module.exports = {
    findAll: async function(){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try{
            const results = await query ("select * from guestbook order by no desc");
            return results;
        }catch(e){
            console.error(e);
        }finally{
            conn.end();
        }
    },
    insert: async function(guestbook){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try{
            return await query(
                "insert into guestbook values(null,?,?,?,now())",
                Object.values(guestbook)
            );
        } catch(e){
            console.error(e);
        } finally{
            conn.end();
        }
    },
    delete: async function(no){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        try{
            return await query(
                "delete from guestbook where no=? and password=?",
                Object.values(no)
            );
        } catch(e){
            console.error(e);
        } finally{
            conn.end();
        }
    }
}