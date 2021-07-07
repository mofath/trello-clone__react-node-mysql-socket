const { corsMiddleware } = require("./corsMiddleware");
const { ErrroHandlerMiddleware, NotFoundMiddleWare } = require("./errorMiddleware");
const { useAuthorization } = require("./authMiddleware");


module.exports = {
    corsMiddleware,
    ErrroHandlerMiddleware,
    NotFoundMiddleWare,
    useAuthorization
}