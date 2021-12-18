import { IStudentsAttributes } from "../models/IStudentsAttributes";
import { MongoDbStudents } from "../models/mongoDb/MongoDbStudent";
import { MongoDbProfilePicture } from "../models/mongoDb/MongoDbProfilePictures";
import { IStudentRepository } from "../repositories/IstudentRepository";
import { CreateStudent } from "../useCases/students/createStudent/CreateStudent";
import { ICreateStudent } from "../useCases/students/createStudent/ICreateStudent";
import { ICreateStudentDTO } from "../useCases/students/createStudent/ICreateStudentDTO";
import { IStudentCreateValidations } from "../useCases/students/createStudent/validations/IStudentCreateValidations";
import { StudentUpdateValidations } from "../useCases/students/UpdateStudent/validations/StudentUpdateValidations";
import { StudentCreateValidation } from "../useCases/students/createStudent/validations/StudentCreateValidations";
import { CreateProfilePicture } from "../useCases/profilePicture/CreateProfilePicture/CreateProfilePicture";
import { S3StorageServiceProfilePicture } from "../providers/implementation/S3StorageServiceProfilePicture";
import { UpdateProfilePicture } from "../useCases/profilePicture/updateProfilePicture/UpdateProfilePicture";
import { DeleteProfilePicture } from "../useCases/profilePicture/deleteProfilePicture/DeleteProfilePicture";
import { IProfilePictureAttributes } from "../models/IProfilePictureAttributes";
import { IProfilePictureRepository } from "../repositories/IProfilePictureRepository";
import {
  studentRepository,
  profilePictureRepository,
} from "./chooseApplicationDatabase";
import { Student } from "../models/mysql/StudentsModel";
import { ProfilePicture } from "../models/mysql/ProfilePicture";

class UtilsStudentTesting {
  public data: ICreateStudentDTO = {
    email: "jubileu@gmail.com",
    name: "Jubis",
    last_name: "Leu",
    age: 20,
    height: 1.88,
    weight: 77.8,
  };
  public studentCreateValidations: IStudentCreateValidations =
    new StudentCreateValidation();
  public createStudent: ICreateStudent = new CreateStudent(
    this.getRepository(),
    this.studentCreateValidations,
  );
  public studentUpdateValidations = new StudentUpdateValidations();
  public storageServiceProfilePicture = new S3StorageServiceProfilePicture();
  public updateProfilePicture = new UpdateProfilePicture(
    profilePictureRepository(),
    this.storageServiceProfilePicture,
  );
  public createProfilePicture = new CreateProfilePicture(
    profilePictureRepository(),
    this.storageServiceProfilePicture,
  );
  public deleteProfilePicture = new DeleteProfilePicture(
    profilePictureRepository(),
    this.storageServiceProfilePicture,
  );
  public picture: Omit<Express.Multer.File, "stream" | "buffer"> = {
    fieldname: "photo",
    originalname: "torres-del-paine-4k_1551644197.jpg",
    encoding: "7bit",
    mimetype: "image/jpeg",
    destination: "/home/prince/Documentos/projetos/school-api-node/uploads",
    filename: "test_picture.jpg",
    path: "/home/prince/Documentos/projetos/school-api-node/uploads/test_picture.jpg",
    size: 966590,
  };

  async createStudentData(
    anotherStudent?: ICreateStudentDTO,
  ): Promise<IStudentsAttributes> {
    if (anotherStudent) {
      return await this.createStudent.execute(anotherStudent);
    }
    return await this.createStudent.execute(this.data);
  }

  async createProfilePictureData(
    id: number | string,
  ): Promise<IProfilePictureAttributes> {
    return await this.createProfilePicture.create(this.picture, id);
  }

  async deleteStudentData(): Promise<void> {
    await MongoDbStudents.deleteMany({});
    await MongoDbProfilePicture.deleteMany({});
    await Student.destroy({ where: {} });
    await ProfilePicture.destroy({ where: {}, truncate: true });
    await this.storageServiceProfilePicture.deleteFile("test_picture.jpg");
  }

  async getProfilePictureCreated(
    id: number | string,
  ): Promise<IProfilePictureAttributes> {
    return (await profilePictureRepository().existsProfilePicture(
      id,
    )) as IProfilePictureAttributes;
  }

  async deleteProfilePictureData(): Promise<void> {
    await ProfilePicture.destroy({ where: {}, truncate: true });
    await MongoDbProfilePicture.deleteMany({});
  }

  getRepository(): IStudentRepository {
    return studentRepository();
  }

  getProfilePictureRepository(): IProfilePictureRepository {
    return profilePictureRepository();
  }
}

const utilsStudentTesting = new UtilsStudentTesting();

export { utilsStudentTesting };
