"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readStudentController = void 0;
const ReadStudentController_1 = require("../../../controllers/student/ReadStudentController");
const MysqlStudentRepository_1 = require("../../../repositories/mysql/MysqlStudentRepository");
const ReadStudent_1 = require("./ReadStudent");
const readStudentRepository = new MysqlStudentRepository_1.MysqlStudentRepository();
const readStudent = new ReadStudent_1.ReadStudent(readStudentRepository);
const readStudentController = new ReadStudentController_1.ReadStudentController(readStudent);
exports.readStudentController = readStudentController;
//# sourceMappingURL=index.js.map