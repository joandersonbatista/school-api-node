import { ICreateStudentDTO } from "../ICreateStudentDTO";

interface IStudentCreateValidations {
  emailValidation(student: ICreateStudentDTO): void;
  nameValidation(student: ICreateStudentDTO): void;
  lastNameValidation(student: ICreateStudentDTO): void;
  ageValidation(student: ICreateStudentDTO): void;
  heightValidation(student: ICreateStudentDTO): void;
  weightValidation(student: ICreateStudentDTO): void;
}

export { IStudentCreateValidations };
