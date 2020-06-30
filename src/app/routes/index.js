"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var test_1 = __importDefault(require("./test"));
var routes = [
    {
        access: "public",
        description: "TESTING",
        enabled: true,
        "function": test_1["default"],
        method: "get",
        path: "/test",
        validation: {
            name: {
                charOnly: true,
                required: true
            },
            password: {
                isPassword: true,
                required: true
            }
        }
    },
];
exports["default"] = routes;
