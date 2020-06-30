"use strict";
exports.__esModule = true;
exports["default"] = (function (request, response, next) {
    request.body;
    if (request.query.test)
        request.error = {
            message: "test is exist",
            status: 200
        };
    else
        request.error = {
            message: "unkownErrorException",
            status: 400
        };
    next();
});
