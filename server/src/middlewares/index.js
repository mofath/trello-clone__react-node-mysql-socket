const { corsMiddleware } = require("./corsMiddleware");
const { ErrroHandlerMiddleware, NotFoundMiddleWare } = require("./errorMiddleware");
const { verifyTokens } = require("./authMiddleware");


module.exports = {
    corsMiddleware,
    ErrroHandlerMiddleware,
    NotFoundMiddleWare,
    verifyTokens
}