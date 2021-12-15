import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { ICreateProfilePicture } from "../../profilePicture/CreateProfilePicture/ICreateProfilePicture";
import { IUpdateProfilePicture } from "../../profilePicture/updateProfilePicture/IUpdateProfilePicture";
import { IUpdateProfilePictureDTO } from "../../profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";
import { IUpdateStudent, CreateProfilePictureType } from "./IUpdateStudent";
import { IUpdateStudentDTO } from "./IUpdateStudentDTO";
import { IStudentUpdateValidations } from "./validations/IStudentUpdateValidations";


class UpdateStudent implements IUpdateStudent {
  constructor(
    private studentRepository: IStudentRepository,
    private studentUpdateValidations: IStudentUpdateValidations,
    private createProfilePicture: ICreateProfilePicture,
    private updateProfilePicture: IUpdateProfilePicture,
  ) {}

  async execute(
    student: IUpdateStudentDTO,
    picture?: CreateProfilePictureType | IUpdateProfilePictureDTO,
  ): Promise<IStudentsAttributes> {
    const existsId = await this.studentRepository.existsId(student.id);

    if (existsId === null) {
      throw new Error("Non-existent user");
    }

    this.studentUpdateValidations.emailValidation(student);
    this.studentUpdateValidations.nameValidation(student);
    this.studentUpdateValidations.lastNameValidation(student);
    this.studentUpdateValidations.ageValidation(student);
    this.studentUpdateValidations.heightValidation(student);
    this.studentUpdateValidations.weightValidation(student);

    const existsEmail = await this.studentRepository.existsEmail(
      student.email || "",
    );

    const [studentHaveProfilePicture] = await this.studentRepository.read(
      student.id,
    );

    if (existsEmail !== null && existsEmail.id === student.id) {
      if (picture === undefined) {
        return await this.studentRepository.update(student, student.id);
      }

      if (studentHaveProfilePicture.profile_picture === null) {
        await this.createProfilePicture.create(picture as CreateProfilePictureType, student.id);
        return await this.studentRepository.update(student, student.id);
      }

      await this.updateProfilePicture.execute(picture as IUpdateProfilePictureDTO, student.id);
      return await this.studentRepository.update(student, student.id);
    }

    if (existsEmail === null) {
      if (picture === undefined) {
        return await this.studentRepository.update(student, student.id);
      }

      if (studentHaveProfilePicture.profile_picture === null) {
        await this.createProfilePicture.create(picture as CreateProfilePictureType, student.id);
        return await this.studentRepository.update(student, student.id);
      }

      await this.updateProfilePicture.execute(picture as IUpdateProfilePictureDTO, student.id);
      return await this.studentRepository.update(student, student.id);
    }

    throw new Error("E-mail already exists");
  }
}

export { UpdateStudent };
