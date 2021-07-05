const express = require('express');
const { CorsMiddleware } = require("./middlewares");

const app = express();

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle CORS
app.use(CorsMiddleware);

module.exports = app;