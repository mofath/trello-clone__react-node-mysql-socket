const express = require('express');
var cookieParser = require('cookie-parser')
const api = require('./routes')
const {
    corsMiddleware,
    ErrroHandlerMiddleware,
    NotFoundMiddleWare
} = require('./middlewares');

const app = express();

// Handle CORS
app.use(corsMiddleware);

app.use(cookieParser());

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
// parse cookies

// Handle routes
app.use(api)

// Overides 404 middleware
app.use(NotFoundMiddleWare);

// Centralized error handler middleware
app.use(ErrroHandlerMiddleware)

module.exports = app;