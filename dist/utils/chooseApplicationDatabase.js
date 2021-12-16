"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRepository = exports.userRepository = exports.profilePictureRepository = void 0;
const ConnectionMongoDB_1 = require("../database/ConnectionMongoDB");
const MongoDbProfilePictureRepository_1 = require("../repositories/mongoDb/MongoDbProfilePictureRepository");
const MongoDbStudentRepository_1 = require("../repositories/mongoDb/MongoDbStudentRepository");
const MongoDbUserRepository_1 = require("../repositories/mongoDb/MongoDbUserRepository");
const MysqlProfilePictureRepository_1 = require("../repositories/mysql/MysqlProfilePictureRepository");
const MysqlStudentRepository_1 = require("../repositories/mysql/MysqlStudentRepository");
const MySqlUserRepository_1 = require("../repositories/mysql/MySqlUserRepository");
ConnectionMongoDB_1.connectionMongoDB;
const userRepositoryMongoDb = new MongoDbUserRepository_1.MongoDbUserRepository();
const studentRepositoryMongoDb = new MongoDbStudentRepository_1.MongoDbStudentRepository();
const profilePictureRepositoryMongoDb = new MongoDbProfilePictureRepository_1.MongoDbProfilePictureRepository();
const userRepositoryMySql = new MySqlUserRepository_1.MysqlUserRepository();
const studentRepositoryMySql = new MysqlStudentRepository_1.MysqlStudentRepository();
const profilePictureRepositoryMySql = new MysqlProfilePictureRepository_1.MysqlProfilePictureRepository();
function userRepository() {
    // return userRepositoryMongoDb;
    return userRepositoryMySql;
}
exports.userRepository = userRepository;
function studentRepository() {
    //return studentRepositoryMongoDb;
    return studentRepositoryMySql;
}
exports.studentRepository = studentRepository;
function profilePictureRepository() {
    //return profilePictureRepositoryMongoDb;
    return profilePictureRepositoryMySql;
}
exports.profilePictureRepository = profilePictureRepository;
//# sourceMappingURL=chooseApplicationDatabase.js.map