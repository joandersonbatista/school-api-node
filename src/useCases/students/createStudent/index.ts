import { CreateStudentController } from "../../../controllers/student/CreateStudentController";
import { studentRepository } from "../../../utils/chooseApplicationDatabase";
import { CreateStudent } from "./CreateStudent";
import { StudentCreateValidation } from "./validations/StudentCreateValidations";

const studentCreateValidations = new StudentCreateValidation();
const createStudent = new CreateStudent(
  studentRepository(),
  studentCreateValidations,
);

const createStudentController = new CreateStudentController(createStudent);

export { createStudentController };
