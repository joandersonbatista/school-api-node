import { IDeleteUser } from "./IDeleteUser";
import { IDeletedUserDTO } from "./IDeleteUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class DeleteUser implements IDeleteUser {
  constructor(private deleteUserRepository: IUserRepository) {}

  async execute(user: IDeletedUserDTO): Promise<void> {
    const existsId = await this.deleteUserRepository.existsId(user.id);

    if (existsId === null) {
      throw new Error("invalid token");
    }

    await this.deleteUserRepository.delete(user.id);
  }
}

export { DeleteUser };
