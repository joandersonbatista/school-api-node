"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentController = void 0;
const DeleteStudentController_1 = require("../../../controllers/student/DeleteStudentController");
const MongoDbStudentRepository_1 = require("../../../repositories/mongoDb/MongoDbStudentRepository");
const MysqlStudentRepository_1 = require("../../../repositories/mysql/MysqlStudentRepository");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const deleteProfilePicture_1 = require("../../profilePicture/deleteProfilePicture");
const DeleteStudent_1 = require("./DeleteStudent");
const mysqlStudentRepository = new MysqlStudentRepository_1.MysqlStudentRepository();
const mongoDbStudentRepository = new MongoDbStudentRepository_1.MongoDbStudentRepository();
const deleteStudent = new DeleteStudent_1.DeleteStudent((0, chooseApplicationDatabase_1.studentRepository)(), deleteProfilePicture_1.deleteProfilePicture);
const deleteStudentController = new DeleteStudentController_1.DeleteStudentController(deleteStudent);
exports.deleteStudentController = deleteStudentController;
//# sourceMappingURL=index.js.map