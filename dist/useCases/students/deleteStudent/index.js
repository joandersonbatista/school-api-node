"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudentController = void 0;
const DeleteStudentController_1 = require("../../../controllers/student/DeleteStudentController");
const MysqlStudentRepository_1 = require("../../../repositories/mysql/MysqlStudentRepository");
const deleteProfilePicture_1 = require("../../profilePicture/deleteProfilePicture");
const DeleteStudent_1 = require("./DeleteStudent");
const deleteStudentRepository = new MysqlStudentRepository_1.MysqlStudentRepository();
const deleteStudent = new DeleteStudent_1.DeleteStudent(deleteStudentRepository, deleteProfilePicture_1.deleteProfilePicture);
const deleteStudentController = new DeleteStudentController_1.DeleteStudentController(deleteStudent);
exports.deleteStudentController = deleteStudentController;
//# sourceMappingURL=index.js.map