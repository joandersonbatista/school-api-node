import { ReadStudentController } from "../../../controllers/student/ReadStudentController";
import { MongoDbStudentRepository } from "../../../repositories/mongoDb/MongoDbStudentRepository";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { ReadStudent } from "./ReadStudent";

const mysqlStudentRepository = new MysqlStudentRepository();
const mongoDbStudentRepository = new MongoDbStudentRepository();
const readStudent = new ReadStudent(
  // mysqlStudentRepository,
  mongoDbStudentRepository,
);
const readStudentController = new ReadStudentController(readStudent);

export { readStudentController };
