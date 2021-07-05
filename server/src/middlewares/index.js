const { corsMiddleware } = require("./corsMiddleware");
const { verifyTokens } = require("./authMiddleware");


module.exports = {
    corsMiddleware,
    verifyTokens
}