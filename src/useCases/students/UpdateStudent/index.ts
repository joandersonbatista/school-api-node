import { UpdateStudentController } from "../../../controllers/student/UpdateStudentController";
import { studentRepository } from "../../../utils/chooseApplicationDatabase";
import { createProfilePicture } from "../../profilePicture/CreateProfilePicture";
import { updateProfilePicture } from "../../profilePicture/updateProfilePicture";
import { UpdateStudent } from "./UpdateStudent";
import { StudentUpdateValidations } from "./validations/StudentUpdateValidations";

const studentUpdateValidations = new StudentUpdateValidations();
const updateStudent = new UpdateStudent(
  studentRepository(),
  studentUpdateValidations,
  createProfilePicture,
  updateProfilePicture
);
const updateStudentController = new UpdateStudentController(updateStudent);

export { updateStudentController };
