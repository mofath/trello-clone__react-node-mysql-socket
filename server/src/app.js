const express = require('express');
const api = require('./routes')
const {
    corsMiddleware,
    ErrroHandlerMiddleware,
    NotFoundMiddleWare
} = require('./middlewares');

const app = express();

// Handle CORS
app.use(corsMiddleware);

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle routes
app.use(api)

// Overides 404 middleware
app.use(NotFoundMiddleWare);

// Centralized error handler middleware
app.use(ErrroHandlerMiddleware)

module.exports = app;