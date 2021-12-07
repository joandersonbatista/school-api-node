import validator from "validator";

import { ICreateStudentDTO } from "../ICreateStudentDTO";
import { IStudentCreateValidations } from "./IStudentCreateValidations";

class StudentCreateValidation implements IStudentCreateValidations {
  emailValidation(student: ICreateStudentDTO): void {
    if (student.email === undefined) throw new Error("E-mail is empty");

    const isEmail = validator.isEmail(student.email);
    const emailIsEmpty = validator.isEmpty(student.email);

    if (emailIsEmpty) throw new Error("E-mail is empty");
    if (!isEmail) throw new Error("it's not email");
  }

  nameValidation(student: ICreateStudentDTO): void {
    if (student.name === undefined) throw new Error("Name is empty");

    const nameIsEmpty = validator.isEmpty(student.name);
    const nameSize = validator.isLength(student.name, { min: 3, max: 255 });

    if (nameIsEmpty) throw new Error("Name is empty");
    if (!nameSize) throw new Error("Name must be from 3 to 255 characters");
  }

  lastNameValidation(student: ICreateStudentDTO): void {
    if (student.last_name === undefined) throw new Error("Last name is empty");

    const lastNameIsEmpty = validator.isEmpty(student.last_name);
    const lastNameSize = validator.isLength(student.last_name, { min: 3, max: 255 });

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

    const heightIsNumber = (height: unknown): boolean => {
      return Number(height) === height && height % 1 !== 0;
    };

    if (!heightIsNumber) throw new Error("The age has to be float type");
  }

  weightValidation(student: ICreateStudentDTO): void {
    if (student.weight === undefined) return;

    const weightIsNumber = (student: ICreateStudentDTO): boolean => {
      return Number(student.weight) === student.weight && student.weight % 1 !== 0;
    };

    if (!weightIsNumber) throw new Error("The weight has to be float type");
  }
}

export { StudentCreateValidation };
