"use strict";
exports.__esModule = true;
var localesDir = __dirname + "/../app/locales/";
var Translation = /** @class */ (function () {
    function Translation(locale) {
        this.setLocale(locale);
    }
    Translation.prototype.setLocale = function (locale) {
        this.locale = locale;
        return this;
    };
    Translation.prototype.getLocale = function () {
        return this.locale;
    };
    Translation.prototype.getMessage = function (message) {
        var locale = require("" + localesDir + this.getLocale() + ".json");
        if (locale[message])
            return locale[message];
        else
            return locale.__DEFAULT;
    };
    return Translation;
}());
exports["default"] = Translation;
