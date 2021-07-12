const express = require('express');
const http = require('http');

const port = 8080;

// Application Setup
const application = express()
// 1. static serve
    .use(express.static(path.join(__dirname,"public")))


// Server Setup
const server = http.createServer(appplication)
    .on('listening',function(){
        console.log('Http Sercer running on port ${port}');
    })
    .on('error',function(error){
        if(error.syscall !== 'listen'){
            throw error;
        }
        switch(error.code){
            case 'EACCESS':
                console.error('Port:${port} require privileges');
                process.exit(1);
                break;
            default:
                throw error;
            case 'EADDRINUSE':
                break;
            default:
                throw error;
        }
    })
    .listen(port);