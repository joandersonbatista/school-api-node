"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionDB = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class ConnectionDb {
    connection;
    constructor() {
        this.connectDB();
    }
    connectDB() {
        this.connection = new sequelize_1.Sequelize(database_1.default);
    }
}
const ConnectionDB = new ConnectionDb();
exports.ConnectionDB = ConnectionDB;
//# sourceMappingURL=ConnectionDb.js.map