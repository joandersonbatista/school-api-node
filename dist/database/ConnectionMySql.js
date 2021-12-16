"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionMySql = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class ConnectionMySql {
    connection;
    constructor() {
        this.connectDB();
    }
    connectDB() {
        this.connection = new sequelize_1.Sequelize(database_1.default);
    }
}
const connectionMySql = new ConnectionMySql();
exports.connectionMySql = connectionMySql;
//# sourceMappingURL=ConnectionMySql.js.map