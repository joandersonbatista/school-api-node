import { CreateStudentController } from "../../../controllers/student/CreateStudentController";
import { MongoDbStudentRepository } from "../../../repositories/mongoDb/MongoDbStudentRepository";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { CreateStudent } from "./CreateStudent";
import { StudentCreateValidation } from "./validations/StudentCreateValidations";

const mysqlStudentRepository = new MysqlStudentRepository();
const mongoDbStudentRepository = new MongoDbStudentRepository();
const studentCreateValidations = new StudentCreateValidation();
const createStudent = new CreateStudent(
  // mysqlStudentRepository,
  mongoDbStudentRepository,
  studentCreateValidations,
);

const createStudentController = new CreateStudentController(createStudent);

export { createStudentController };
