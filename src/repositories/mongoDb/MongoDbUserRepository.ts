import { IUsersAttributes } from "../../models/IUserAttributes";
import { MongoDbUser } from "../../models/mongoDb/MongoDbUser";
import { ICreateUserDTO } from "../../useCases/users/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../../useCases/users/updateUser/IUpdateUserDTO";
import { IUserRepository } from "../IUserRepository";

class MongoDbUserRepository implements IUserRepository {
  async save(user: ICreateUserDTO): Promise<IUsersAttributes> {
    return await MongoDbUser.create(user);
  }

  async update(user: IUpdateUserDTO, id: string): Promise<void> {
    await MongoDbUser.updateOne({ id }, user);
  }

  async existsUserToken(
    id: string,
    email: string,
  ): Promise<IUsersAttributes | null> {
    const user = await MongoDbUser.findOne({ id, email });

    if (user === null) return null;

    return user;
  }

  async existsEmail(email: string): Promise<IUsersAttributes | null> {
    const user = await MongoDbUser.findOne({ email });

    if (user === null) return null;

    return user;
  }

  async delete(id: string): Promise<void> {
    await MongoDbUser.deleteOne({ id });
  }

  async existsId(id: string): Promise<IUsersAttributes | null> {
    const user = await MongoDbUser.findOne({ id });

    if (user === null) return null;

    return user;
  }

  async read(id: string): Promise<IUsersAttributes[]> {
    const user = await MongoDbUser.findOne({ id });

    return new Array(user!);
  }
}

export { MongoDbUserRepository };
