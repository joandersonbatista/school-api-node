import bcryptjs from "bcryptjs";

import { ICreateUser } from "./ICreateUser";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUserCreateValidations } from "./validations/IUserCreateValidations";
import { IUsersAttributes } from "../../../models/IUserAttributes";

class CreateUser implements ICreateUser {
  constructor(
    private userRepository: IUserRepository,
    private userCreateValidations: IUserCreateValidations,
  ) {}

  async execute(user: ICreateUserDTO): Promise<IUsersAttributes> {
    this.userCreateValidations.validationEmail(user);
    this.userCreateValidations.validationName(user);
    this.userCreateValidations.validationPassword(user);

    const existsEmail = await this.userRepository.existsEmail(user.email);

    if (existsEmail !== null) {
      throw new Error("E-mail already exists");
    }

    const passwordHash = await bcryptjs.hash(user.password, 8);
    user.password = passwordHash;

    return await this.userRepository.save(user);
  }
}

export { CreateUser };
