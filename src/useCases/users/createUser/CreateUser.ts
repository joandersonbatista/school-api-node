import { ICreateUser } from "./ICreateUser";
import { ICreateUserDTO } from "./ICreateUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUserCreateValidations } from "./validations/IUserCreateValidations";

class CreateUser implements ICreateUser {
  constructor(
    private createUserRepository: IUserRepository,
    private userCreateValidations: IUserCreateValidations,
  ) {}

  async execute(user: ICreateUserDTO): Promise<void> {
    this.userCreateValidations.validationEmail(user);
    this.userCreateValidations.validationName(user);
    this.userCreateValidations.validationPassword(user);

    const existsEmail = await this.createUserRepository.existsEmail(user.email);

    if (existsEmail !== null) {
      throw new Error("E-mail already exists");
    }

    await this.createUserRepository.save(user);
  }
}

export { CreateUser };
