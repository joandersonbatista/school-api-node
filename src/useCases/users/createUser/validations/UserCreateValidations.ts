import validator from "validator";

import { ICreateUserDTO } from "../ICreateUserDTO";
import { IUserCreateValidations } from "./IUserCreateValidations";

class UserCreateValidantion implements IUserCreateValidations {
  validationEmail(user: ICreateUserDTO): void {
    if (user.email === undefined) {
      throw new Error("E-mail is empty");
    }

    const isEmail = validator.isEmail(user.email);
    const emailIsEmpty = validator.isEmpty(user.email);

    if (emailIsEmpty) throw new Error("E-mail is empty");
    if (!isEmail) throw new Error("it's not email");
  }

  validationName(user: ICreateUserDTO): void {
    if (user.name === undefined) {
      throw new Error("Name is empty");
    }

    const nameIsEmpty = validator.isEmpty(user.name);
    const nameLength = validator.isLength(user.name, {
      max: 255,
      min: 3,
    });

    if (nameIsEmpty) throw new Error("Name is empty");
    if (!nameLength) throw new Error("Name must be from 3 to 255 characters");
  }

  validationPassword(user: ICreateUserDTO): void {
    if (user.password === undefined) {
      throw new Error("Password is empty");
    }

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
