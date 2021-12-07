"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Middlewares_1 = require("./Middlewares");
const Router_1 = require("./Router");
const ConnectionDb_1 = require("./database/ConnectionDb");
class App {
    app;
    middlewares;
    routes;
    connectionDB;
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares = new Middlewares_1.Middlewares(this.app);
        this.routes = new Router_1.Router(this.app);
        this.connectionDB = ConnectionDb_1.ConnectionDB;
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map