const { HttpStatusCode } = require("../constants");

class HttpError extends Error {
    constructor(
        status = HttpStatusCode.INTERNAL_SERVER_ERROR.status,
        code = HttpStatusCode.INTERNAL_SERVER_ERROR.code,
        message = 'Something went wrong',
        stack,
    ) {
        super();
        this.status = status;
        this.code = code;
        this.message = message;
        this.stack = stack;
    };
};

class Error404 extends HttpError {
    constructor(message = "Not found") {
        super(
            HttpStatusCode.INTERNAL_SERVER_ERROR.status,
            code = HttpStatusCode.INTERNAL_SERVER_ERROR.code,
            message,
            stack
        );
    };
};

class Error500 extends HttpError {
    constructor(message = "Something went wrong") {
        super();
        this.message = message;
    };
};

module.exports = {
    HttpError,
    Error404,
    Error500,
};