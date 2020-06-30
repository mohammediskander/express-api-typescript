"use strict";
exports.__esModule = true;
var Validation = /** @class */ (function () {
    function Validation(validations, values) {
        var _this = this;
        this.setValidations = function (validations) {
            _this.validations = validations;
            return _this;
        };
        this.setValues = function (values) {
            _this.values = values;
            _this.setValues;
        };
        this.getValidations = function () {
            return _this.validations;
        };
        this.getValues = function () {
            return _this.values;
        };
        this.required = function (value) {
            return (value !== undefined &&
                value !== null &&
                typeof value === "string" &&
                value !== "");
        };
        /**
         *
         * @param value the value to check
         * @description check if the value is a real number, Regardless of the type of `value`.
         * @returns return boolean value, whether the `Regular Expresion` is ture or not.
         */
        this.isNumber = function (value) {
            return /^([0-9]{0,})$/.test(value);
        };
        /**
         *
         * @param value
         */
        this.isEmail = function (value) {
            return /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(value);
        };
        this.isPassword = function (value) {
            return /^(?=(?:.*[A-Z]){2,})(?=(?:.*[a-z]){2,})(?=(?:.*\d){2,})(?=(?:.*[!@#$%^&*()\-_=+{};:,<.>]){2,})(?!.*(.)\1{2})([A-Za-z0-9!@#$%^&*()\-_=+{};:,<.>]{12,20})$/.test(value);
        };
        this.charOnly = function (value) {
            return /^([A-Za-z ,.'`-]{2,})$/.test(value);
        };
        /**
         * @returns return a boolean value, wheter the values is valid or not.
         */
        this.validateAll = function () {
            var validations = _this.getValidations();
            var values = _this.getValues();
            Object.keys(validations).forEach(function (validation) {
                var validationList = validations[validation];
                var value = values[validation];
                if (validationList.required && !_this.required(value)) {
                    throw {
                        key: validation,
                        message: "required",
                        status: 400
                    };
                }
                if (validationList.isEmail && !_this.isNumber(value))
                    if (validationList.isEmail && !_this.isEmail(value))
                        throw {
                            key: validation,
                            message: "notValidEmail",
                            status: 400
                        };
                if (validationList.isPassword && !_this.isPassword(value)) {
                    throw {
                        key: validation,
                        message: "notValidPassword",
                        status: 400
                    };
                }
                if (validationList.charOnly && !_this.charOnly(value)) {
                    console.log("??");
                    throw {
                        key: validation,
                        message: "notValidCharOnly",
                        status: 400
                    };
                }
            });
            return true;
        };
        this.setValidations(validations);
        this.setValues(values);
    }
    return Validation;
}());
exports["default"] = Validation;
