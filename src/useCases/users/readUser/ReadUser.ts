import { IReadUser } from "./IReadUser";
import { IReadUserDTO } from "./IReadUserDTO";
import { IUsersAttributes } from "../../../models/IUserAttributes";
import { IUserRepository } from "../../../repositories/IUserRepository";

class ReadUser implements IReadUser {
  constructor(public readUserRepository: IUserRepository) {}

  async execute(user: IReadUserDTO): Promise<IUsersAttributes[]> {
    const existsId = await this.readUserRepository.existsId(user.id);

    if (existsId === null) {
      throw new Error("invalid token");
    }

    return await this.readUserRepository.read(user.id);
  }
}

export { ReadUser };
