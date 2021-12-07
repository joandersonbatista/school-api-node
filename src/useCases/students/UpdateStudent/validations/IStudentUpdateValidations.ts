import { IUpdateStudentDTO } from "../IUpdateStudentDTO";

interface IStudentUpdateValidations {
  emailValidation(student: IUpdateStudentDTO): void;
  nameValidation(student: IUpdateStudentDTO): void;
  lastNameValidation(student: IUpdateStudentDTO): void;
  ageValidation(student: IUpdateStudentDTO): void;
  heightValidation(student: IUpdateStudentDTO): void;
  weightValidation(student: IUpdateStudentDTO): void;
}

export { IStudentUpdateValidations };
