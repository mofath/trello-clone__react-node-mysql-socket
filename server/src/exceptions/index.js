const { HttpStatusCode } = require("../constants");

class HttpError extends Error {
    constructor(
        status = HttpStatusCode.INTERNAL_SERVER_ERROR.status,
        code = HttpStatusCode.INTERNAL_SERVER_ERROR.code,
        message = 'Something went wrong',
    ) {
        super();
        this.status = status;
        this.code = code;
        this.message = message;
    };
};

class Error404 extends HttpError {
    constructor(message = "Not found") {
        super();
        this.message = message;
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