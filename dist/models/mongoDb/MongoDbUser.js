"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbUser = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
const MongoDbUser = (0, mongoose_1.model)("users", schema);
exports.MongoDbUser = MongoDbUser;
//# sourceMappingURL=MongoDbUser.js.map