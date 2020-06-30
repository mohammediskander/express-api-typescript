"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var translation_1 = __importDefault(require("../@utils/translation"));
var validation_1 = __importDefault(require("../@utils/validation"));
var Routes = /** @class */ (function () {
    function Routes(server, routes) {
        var _this = this;
        // SETTERS
        this.setServer = function (server) {
            _this.server = server;
        };
        this.setRoutes = function (routes) {
            _this.routes = routes;
            return _this;
        };
        // GETTERS
        this.getServer = function () {
            return _this.server;
        };
        this.getRoutes = function () {
            return _this.routes;
        };
        this.configureRoutes = function () {
            _this.getRoutes().forEach(function (route) {
                if (route.enabled) {
                    _this.getServer()[route.method](route.path, function (request, response, next) {
                        console.log("URL: " + request.url);
                        next();
                    }, function (request, response, next) {
                        var validation = new validation_1["default"](route.validation, request.body);
                        try {
                            validation.validateAll();
                            next();
                        }
                        catch (error) {
                            var translate = new translation_1["default"]("ar");
                            response
                                .status(error.status)
                                .send(translate.getMessage(error.key) + " " + translate.getMessage(error.message));
                        }
                    }, function (request, response, next) {
                        route["function"](request, response, next);
                    }, function (request, response, next) {
                        response
                            .status(request.error.status)
                            .send(new translation_1["default"]("ar").getMessage(request.error.message));
                    });
                }
            });
        };
        this.setRoutes(routes);
        this.setServer(server);
    }
    return Routes;
}());
exports["default"] = Routes;
