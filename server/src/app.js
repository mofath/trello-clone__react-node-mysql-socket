const express = require('express');
const { corsMiddleware } = require('./middlewares');
const api = require('./routes')

const app = express();

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle CORS
app.use(corsMiddleware);

// Handle routes
app.use(api)

module.exports = app;