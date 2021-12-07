"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middlewares = void 0;
const express_1 = require("express");
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
class Middlewares {
    app;
    constructor(app) {
        this.app = app;
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use((0, express_1.json)());
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
    }
}
exports.Middlewares = Middlewares;
//# sourceMappingURL=Middlewares.js.map