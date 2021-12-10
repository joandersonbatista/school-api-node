import { DeleteStudentController } from "../../../controllers/student/DeleteStudentController";
import { MongoDbStudentRepository } from "../../../repositories/mongoDb/MongoDbStudentRepository";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { deleteProfilePicture } from "../../profilePicture/deleteProfilePicture";
import { DeleteStudent } from "./DeleteStudent";

const mysqlStudentRepository = new MysqlStudentRepository();
const mongoDbStudentRepository = new MongoDbStudentRepository();
const deleteStudent = new DeleteStudent(
  // mysqlStudentRepository,
  mongoDbStudentRepository,
  deleteProfilePicture,
);
const deleteStudentController = new DeleteStudentController(deleteStudent);

export { deleteStudentController };
