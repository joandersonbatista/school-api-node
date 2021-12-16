"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfilePicture = void 0;
const sequelize_1 = require("sequelize");
const ConnectionMySql_1 = require("../../database/ConnectionMySql");
class ProfilePicture extends sequelize_1.Model {
}
exports.ProfilePicture = ProfilePicture;
ProfilePicture.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    fieldname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    filename: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mimetype: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    originalname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    student_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    url: {
        type: sequelize_1.DataTypes.STRING,
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
    sequelize: ConnectionMySql_1.connectionMySql.connection,
});
//# sourceMappingURL=ProfilePicture.js.map