const express = require('express');
const api = require('./routes')
const { corsMiddleware } = require('./middlewares');

const app = express();

// Handle CORS
app.use(corsMiddleware);

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle routes
app.use(api)

module.exports = app;