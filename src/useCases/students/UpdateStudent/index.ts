import { UpdateStudentController } from "../../../controllers/student/UpdateStudentController";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { createProfilePicture } from "../../profilePicture/CreateProfilePicture";
import { updateProfilePicture } from "../../profilePicture/updateProfilePicture";
import { UpdateStudent } from "./UpdateStudent";
import { StudentUpdateValidations } from "./validations/StudentUpdateValidations";

const updateStudentRepository = new MysqlStudentRepository();
const studentUpdateValidations = new StudentUpdateValidations();
const updateStudent = new UpdateStudent(
  updateStudentRepository,
  studentUpdateValidations,
  createProfilePicture,
  updateProfilePicture
);
const updateStudentController = new UpdateStudentController(updateStudent);

export { updateStudentController };
