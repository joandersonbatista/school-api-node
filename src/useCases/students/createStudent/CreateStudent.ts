import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { ICreateStudent } from "./ICreateStudent";
import { ICreateStudentDTO } from "./ICreateStudentDTO";
import { IStudentCreateValidations } from "./validations/IStudentCreateValidations";

class CreateStudent implements ICreateStudent {
  constructor(
    private studentRepository: IStudentRepository,
    private studentCreateValidations: IStudentCreateValidations,
  ) {}

  async execute(student: ICreateStudentDTO): Promise<void> {
    this.studentCreateValidations.emailValidation(student);
    this.studentCreateValidations.nameValidation(student);
    this.studentCreateValidations.lastNameValidation(student);
    this.studentCreateValidations.ageValidation(student);
    this.studentCreateValidations.heightValidation(student);
    this.studentCreateValidations.weightValidation(student);

    const existsEmail = await this.studentRepository.existsEmail(
      student.email,
    );

    if (existsEmail === null) {
      await this.studentRepository.save(student);
      return;
    }
    throw new Error("E-mail already exists");
  }
}

export { CreateStudent };
