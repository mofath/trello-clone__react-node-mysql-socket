const express = require('express');
const { corsMiddleware } = require("./middlewares");

const app = express();

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Handle CORS
app.use(corsMiddleware);

module.exports = app;