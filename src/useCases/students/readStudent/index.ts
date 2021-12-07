import { ReadStudentController } from "../../../controllers/student/ReadStudentController";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { ReadStudent } from "./ReadStudent";

const readStudentRepository = new MysqlStudentRepository();
const readStudent = new ReadStudent(readStudentRepository);
const readStudentController = new ReadStudentController(readStudent);

export { readStudentController };
