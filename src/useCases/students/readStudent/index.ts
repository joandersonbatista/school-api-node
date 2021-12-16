import { ReadStudentController } from "../../../controllers/student/ReadStudentController";
import { studentRepository } from "../../../utils/chooseApplicationDatabase";
import { ReadStudent } from "./ReadStudent";

const readStudent = new ReadStudent(studentRepository());
const readStudentController = new ReadStudentController(readStudent);

export { readStudentController };
