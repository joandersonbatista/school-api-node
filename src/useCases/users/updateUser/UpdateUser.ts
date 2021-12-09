import bcryptjs from "bcryptjs";

import { IUpdateUser } from "./IUpdateUser";
import { IUpdateUserDTO } from "./IUpdateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IValidationsUserUpdate } from "./validations/IValidationsUserUpdate";

class UpdateUser implements IUpdateUser {
  constructor(
    private updateUserRepository: IUserRepository,
    private validationsUpdateUser: IValidationsUserUpdate,
  ) {}

  async execute(user: IUpdateUserDTO): Promise<void> {
    const existsId = await this.updateUserRepository.existsId(user.id);

    if (existsId === null) {
      throw new Error("Invalid token");
    }

    this.validationsUpdateUser.validationEmail(user);
    this.validationsUpdateUser.validationName(user);
    this.validationsUpdateUser.validationPassword(user);

    const existsEmail = await this.updateUserRepository.existsEmail(
      user.email || "",
    );

    if (existsEmail !== null && existsEmail.id === user.id) {
      if (user.password !== undefined) {
        const passwordHash = await bcryptjs.hash(user.password, 8);
        user.password = passwordHash;
      }
      await this.updateUserRepository.update(user, user.id);
      return;
    }

    if (existsEmail !== null) throw new Error("E-mail already exists");
  }
}

export { UpdateUser };
