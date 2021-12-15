import validator from "validator";

import { ICreateStudentDTO } from "../ICreateStudentDTO";
import { IStudentCreateValidations } from "./IStudentCreateValidations";

function isFloat(num: number): boolean {
  return Number(num) === num && num % 1 !== 0;
}

class StudentCreateValidation implements IStudentCreateValidations {
  emailValidation(student: ICreateStudentDTO): void {
    const isEmail = validator.isEmail(student.email);
    const emailIsEmpty = validator.isEmpty(student.email);

    if (emailIsEmpty) throw new Error("E-mail is empty");
    if (!isEmail) throw new Error("it's not email");
  }

  nameValidation(student: ICreateStudentDTO): void {
    const nameIsEmpty = validator.isEmpty(student.name);
    const nameSize = validator.isLength(student.name, { min: 3, max: 255 });

    if (nameIsEmpty) throw new Error("Name is empty");
    if (!nameSize) throw new Error("Name must be from 3 to 255 characters");
  }

  lastNameValidation(student: ICreateStudentDTO): void {
    const lastNameIsEmpty = validator.isEmpty(student.last_name);
    const lastNameSize = validator.isLength(student.last_name, {
      min: 3,
      max: 255,
    });

    if (lastNameIsEmpty) throw new Error("Last name is empty");
    if (!lastNameSize)
      throw new Error("Last name must be from 3 to 255 characters");
  }

  ageValidation(student: ICreateStudentDTO): void {
    if (student.age === undefined) return;

    const ageIsNumber = Number.isInteger(student.age);

    if (!ageIsNumber) throw new Error("The age has to be Integer type");
  }

  heightValidation(student: ICreateStudentDTO): void {
    if (student.height === undefined) return;

    if (!isFloat(student.height))
      throw new Error("The height has to be float type");
  }

  weightValidation(student: ICreateStudentDTO): void {
    if (student.weight === undefined) return;

    if (!isFloat(student.weight))
      throw new Error("The weight has to be float type");
  }
}

export { StudentCreateValidation, isFloat };
