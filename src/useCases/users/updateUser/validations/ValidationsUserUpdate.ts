import validator from "validator";

import { IUpdateUserDTO } from "../IUpdateUserDTO";
import { IValidationsUserUpdate } from "./IValidationsUserUpdate";

class ValidationsUserUpdate implements IValidationsUserUpdate {
  validationEmail(user: IUpdateUserDTO): void {
    if (user.email === undefined) return;

    const isEmail = validator.isEmail(user.email);
    const emailIsEmpty = validator.isEmpty(user.email);

    if (!isEmail) throw new Error("it's not email");
    if (emailIsEmpty) throw new Error("E-mail is empty");
  }

  validationName(user: IUpdateUserDTO): void {
    if (user.name === undefined) return;

    const nameIsEmpty = validator.isEmpty(user.name!);
    const nameLength = validator.isLength(user.name!, {
      max: 255,
      min: 3,
    });

    if (nameIsEmpty) throw new Error("Name is empty");
    if (!nameLength) throw new Error("Name must be from 3 to 255 characters");
  }

  validationPassword(user: IUpdateUserDTO): void {
    if (user.password === undefined) return;

    const passwordIsEmpty = validator.isEmpty(user.password);
    const passwordLength = validator.isLength(user.password, {
      max: 50,
      min: 6,
    });

    if (passwordIsEmpty) throw new Error("Password is empty");
    if (!passwordLength)
      throw new Error("Password must be from 6 to 50 characters");
  }
}

export { ValidationsUserUpdate };
