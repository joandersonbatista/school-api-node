import { IReadUser } from "./IReadUser";
import { IReadUserDTO } from "./IReadUserDTO";
import { IUsersAttributes } from "../../../models/IUserAttributes";
import { IUserRepository } from "../../../repositories/IUserRepository";

class ReadUser implements IReadUser {
  constructor(private userRepository: IUserRepository) {}

  async execute(user: IReadUserDTO): Promise<IUsersAttributes[]> {
    const existsId = await this.userRepository.existsId(user.id);

    if (existsId === null) {
      throw new Error("invalid token");
    }

    return await this.userRepository.read(user.id);
  }
}

export { ReadUser };
