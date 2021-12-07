"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentController = void 0;
const CreateStudentController_1 = require("../../../controllers/student/CreateStudentController");
const MysqlStudentRepository_1 = require("../../../repositories/mysql/MysqlStudentRepository");
const CreateStudent_1 = require("./CreateStudent");
const StudentCreateValidations_1 = require("./validations/StudentCreateValidations");
const createStudentRepository = new MysqlStudentRepository_1.MysqlStudentRepository();
const studentCreateValidations = new StudentCreateValidations_1.StudentCreateValidation();
const createStudent = new CreateStudent_1.CreateStudent(createStudentRepository, studentCreateValidations);
const createStudentController = new CreateStudentController_1.CreateStudentController(createStudent);
exports.createStudentController = createStudentController;
//# sourceMappingURL=index.js.map