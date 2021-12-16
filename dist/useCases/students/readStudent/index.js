"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readStudentController = void 0;
const ReadStudentController_1 = require("../../../controllers/student/ReadStudentController");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const ReadStudent_1 = require("./ReadStudent");
const readStudent = new ReadStudent_1.ReadStudent((0, chooseApplicationDatabase_1.studentRepository)());
const readStudentController = new ReadStudentController_1.ReadStudentController(readStudent);
exports.readStudentController = readStudentController;
//# sourceMappingURL=index.js.map