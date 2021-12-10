import { UpdateStudentController } from "../../../controllers/student/UpdateStudentController";
import { MongoDbStudentRepository } from "../../../repositories/mongoDb/MongoDbStudentRepository";
import { MysqlStudentRepository } from "../../../repositories/mysql/MysqlStudentRepository";
import { createProfilePicture } from "../../profilePicture/CreateProfilePicture";
import { updateProfilePicture } from "../../profilePicture/updateProfilePicture";
import { UpdateStudent } from "./UpdateStudent";
import { StudentUpdateValidations } from "./validations/StudentUpdateValidations";

const mysqlStudentRepository = new MysqlStudentRepository();
const mongoDbStudentRepository = new MongoDbStudentRepository();
const studentUpdateValidations = new StudentUpdateValidations();
const updateStudent = new UpdateStudent(
  // mysqlStudentRepository,
  mongoDbStudentRepository,
  studentUpdateValidations,
  createProfilePicture,
  updateProfilePicture
);
const updateStudentController = new UpdateStudentController(updateStudent);

export { updateStudentController };
