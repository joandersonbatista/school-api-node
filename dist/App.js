"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const Middlewares_1 = require("./Middlewares");
const Router_1 = require("./Router");
const ConnectionMongoDB_1 = require("./database/ConnectionMongoDB");
class App {
    app;
    middlewares;
    routes;
    connectionDB;
    constructor() {
        this.app = (0, express_1.default)();
        this.middlewares = new Middlewares_1.Middlewares(this.app);
        this.routes = new Router_1.Router(this.app);
        this.connectionDB = ConnectionMongoDB_1.connectionMongoDB;
        // this.connectionDB = connectionMySql;
    }
}
exports.default = new App().app;
//# sourceMappingURL=App.js.map