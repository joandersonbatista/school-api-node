import validator from "validator";

import { ICreateUserDTO } from "../ICreateUserDTO";
import { IUserCreateValidations } from "./IUserCreateValidations";

class UserCreateValidantion implements IUserCreateValidations {
  validationEmail(user: ICreateUserDTO): void {
    const isEmail = validator.isEmail(user.email);
    const emailIsEmpty = validator.isEmpty(user.email);

    if (emailIsEmpty) throw new Error("E-mail is empty");
    if (!isEmail) throw new Error("it's not email");
  }

  validationName(user: ICreateUserDTO): void {
    const nameIsEmpty = validator.isEmpty(user.name);
    const nameLength = validator.isLength(user.name, {
      max: 255,
      min: 3,
    });

    if (nameIsEmpty) throw new Error("Name is empty");
    if (!nameLength) throw new Error("Name must be from 3 to 255 characters");
  }

  validationPassword(user: ICreateUserDTO): void {
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

export { UserCreateValidantion };
