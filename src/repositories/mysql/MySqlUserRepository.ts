import { User } from "../../models/mysql/UserModel";
import { IUserRepository } from "../IUserRepository";
import { IUsersAttributes } from "../../models/IUserAttributes";
import { IUpdateUserDTO } from "../../useCases/users/updateUser/IUpdateUserDTO";
import { ICreateUserDTO } from "../../useCases/users/createUser/ICreateUserDTO";

class MysqlUserRepository implements IUserRepository {
  async save(user: ICreateUserDTO): Promise<IUsersAttributes> {
    return (await User.create(user)).get();
  }

  async existsEmail(email: string): Promise<IUsersAttributes | null> {
    const existsEmail = await User.findOne({
      where: { email },
    });

    if (existsEmail === null) return null;

    return existsEmail.get();
  }

  async delete(id: number): Promise<void> {
    await User.destroy({ where: { id } });
  }

  async existsId(id: number): Promise<IUsersAttributes | null> {
    const existId = await User.findOne({ where: { id } });

    if (existId === null) return null;

    return existId.get();
  }

  async read(id: number): Promise<IUsersAttributes[]> {
    const user = await User.findOne({ where: { id } });

    return new Array(user!.get());
  }

  async update(user: IUpdateUserDTO, id: number): Promise<void> {
    await User.update(user, { where: { id } });
  }

  async existsUserToken(
    id: number,
    email: string,
  ): Promise<IUsersAttributes | null> {
    const userExists = await User.findOne({
      where: { id, email },
    });

    if (userExists === null) return null;

    return userExists.get();
  }
}

export { MysqlUserRepository };
