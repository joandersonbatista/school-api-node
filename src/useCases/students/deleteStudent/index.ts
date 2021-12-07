import { DeleteStudentController } from "../../../controllers/student/DeleteStudentController";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { deleteProfilePicture } from "../../profilePicture/deleteProfilePicture";
import { DeleteStudent } from "./DeleteStudent";

const deleteStudentRepository = new MysqlStudentRepository();
const deleteStudent = new DeleteStudent(
  deleteStudentRepository,
  deleteProfilePicture,
);
const deleteStudentController = new DeleteStudentController(deleteStudent);

export { deleteStudentController };
