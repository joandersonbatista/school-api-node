"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectionMongoDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});
const mongoose_1 = __importDefault(require("mongoose"));
class ConnectionMongoDB {
    connection;
    constructor() {
        this.connectDB();
    }
    async connectDB() {
        this.connection = await mongoose_1.default.connect(process.env.DATABASE_HOST_MONGODB);
    }
}
const connectionMongoDB = new ConnectionMongoDB();
exports.connectionMongoDB = connectionMongoDB;
//# sourceMappingURL=ConnectionMongoDB.js.map