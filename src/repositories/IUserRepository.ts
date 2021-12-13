import { IUsersAttributes } from "../models/IUserAttributes";
import { ICreateUserDTO } from "../useCases/users/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../useCases/users/updateUser/IUpdateUserDTO";

interface IUserRepository {
  save(user: ICreateUserDTO): Promise<IUsersAttributes>;
  update(user: IUpdateUserDTO, id: number | string): Promise<void>;
  existsUserToken(id: number | string, email: string): Promise<IUsersAttributes | null>;
  existsEmail(email: string): Promise<IUsersAttributes | null>;
  delete(id: number | string): Promise<void>;
  existsId(id: number | string): Promise<IUsersAttributes | null>;
  read(id: number | string): Promise<IUsersAttributes[]>;
}

export { IUserRepository };
