const express = require('express');

const server = express();

server.use('/', (req, res, next) => {
    res.send('hello world')
});

server.listen(5000, () => {
    console.log('server is up');
});