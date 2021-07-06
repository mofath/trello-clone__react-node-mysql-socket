const { Error404 } = require("../exceptions")

exports.NotFoundMiddleWare = (req, res, next) => {
    next(new Error404());
};

exports.ErrroHandlerMiddleware = (error, req, res, next) => {
    console.log(error.message);

    res.status(error.status || 500);

    return res.json({
        message: error.message,
        success: false
    });
}