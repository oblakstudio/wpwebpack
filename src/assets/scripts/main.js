"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var body_class_router_1 = require("body-class-router");
var common_1 = __importDefault(require("./routes/common"));
var Home_1 = __importDefault(require("./routes/Home"));
var routes = new body_class_router_1.Router({
    common: new common_1["default"](),
    home: new Home_1["default"]()
});
jQuery(function () {
    routes.loadEvents();
});
