import { CreateStudentController } from "../../../controllers/student/CreateStudentController";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";

import { CreateStudent } from "./CreateStudent";
import { StudentCreateValidation } from "./validations/StudentCreateValidations";

const createStudentRepository = new MysqlStudentRepository();
const studentCreateValidations = new StudentCreateValidation();

const createStudent = new CreateStudent(
  createStudentRepository,
  studentCreateValidations,
);

const createStudentController = new CreateStudentController(createStudent);

export { createStudentController };
