"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middlewares = void 0;
const express_1 = require("express");
class Middlewares {
    app;
    constructor(app) {
        this.app = app;
        this.middlewares();
    }
    middlewares() {
        this.app.use((0, express_1.urlencoded)({ extended: true }));
        this.app.use((0, express_1.json)());
    }
}
exports.Middlewares = Middlewares;
//# sourceMappingURL=Middlewares.js.map