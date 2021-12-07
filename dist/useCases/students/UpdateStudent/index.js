"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStudentController = void 0;
const UpdateStudentController_1 = require("../../../controllers/student/UpdateStudentController");
const MysqlStudentRepository_1 = require("../../../repositories/mysql/MysqlStudentRepository");
const CreateProfilePicture_1 = require("../../profilePicture/CreateProfilePicture");
const updateProfilePicture_1 = require("../../profilePicture/updateProfilePicture");
const UpdateStudent_1 = require("./UpdateStudent");
const StudentUpdateValidations_1 = require("./validations/StudentUpdateValidations");
const updateStudentRepository = new MysqlStudentRepository_1.MysqlStudentRepository();
const studentUpdateValidations = new StudentUpdateValidations_1.StudentUpdateValidations();
const updateStudent = new UpdateStudent_1.UpdateStudent(updateStudentRepository, studentUpdateValidations, CreateProfilePicture_1.createProfilePicture, updateProfilePicture_1.updateProfilePicture);
const updateStudentController = new UpdateStudentController_1.UpdateStudentController(updateStudent);
exports.updateStudentController = updateStudentController;
//# sourceMappingURL=index.js.map