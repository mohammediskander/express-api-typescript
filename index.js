"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var src_1 = require("./src");
var app = express_1["default"]();
src_1.configureServer(app);
app.listen(8080, function () {
    console.log("Sever Started..");
});
