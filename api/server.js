const express = require('express');

const dbRouter = require('../posts/dbRouter');

const server = express();

server.use(express.json());

server.use('/api/posts', dbRouter);

server.get('/', (req,res) =>{
    res.send(`
    <h2> My Routed API</h2>
    <p>API Server is Running!</p>`);
});


module.exports = server;