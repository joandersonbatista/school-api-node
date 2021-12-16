"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_1 = require("sequelize");
const ConnectionMySql_1 = require("../../database/ConnectionMySql");
const ProfilePicture_1 = require("./ProfilePicture");
class Student extends sequelize_1.Model {
}
exports.Student = Student;
Student.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    weight: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
    },
    height: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: true,
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
Student.hasOne(ProfilePicture_1.ProfilePicture, {
    sourceKey: "id",
    foreignKey: "student_id",
    as: "profile_picture",
});
//# sourceMappingURL=StudentsModel.js.map