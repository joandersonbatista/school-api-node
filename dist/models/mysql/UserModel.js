"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const sequelize_1 = require("sequelize");
const ConnectionDb_1 = require("../../database/ConnectionDb");
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password_hash: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "",
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.VIRTUAL,
        allowNull: false,
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
    updated_at: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
        allowNull: false,
    },
}, {
    sequelize: ConnectionDb_1.ConnectionDB.connection,
});
User.addHook("beforeSave", async (user) => {
    if (user.getDataValue("password")) {
        const passwordHash = await bcryptjs_1.default.hash(user.getDataValue("password"), 8);
        user.set("password_hash", passwordHash);
    }
});
//# sourceMappingURL=UserModel.js.map