"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudentController = void 0;
const CreateStudentController_1 = require("../../../controllers/student/CreateStudentController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const CreateStudent_1 = require("./CreateStudent");
const StudentCreateValidations_1 = require("./validations/StudentCreateValidations");
const studentCreateValidations = new StudentCreateValidations_1.StudentCreateValidation();
const createStudent = new CreateStudent_1.CreateStudent((0, chooseApplicationDatabase_1.studentRepository)(), studentCreateValidations);
const createStudentController = new CreateStudentController_1.CreateStudentController(createStudent);
exports.createStudentController = createStudentController;
//# sourceMappingURL=index.js.map