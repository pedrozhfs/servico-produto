'use strict'

const http = require('http')
const { isNull } = require('util')
const app = require('../src/app')
const port = searchPort(process.env.PORT || '3000')
const server = http.createServer(app)

server.listen(port)
//server.on('error', )
//server.on('listening', )
console.log(`API executada na porta: ${port}`)

function searchPort(val){

    const port = parseInt(val, 10);

    if(isNaN(port))
        return val;

    if(port >= 0)
        return port;

    return; 
}

 