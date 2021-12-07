import { IUsersAttributes } from "../models/IUserAttributes";
import { ICreateUserDTO } from "../useCases/users/createUser/ICreateUserDTO";
import { IUpdateUserDTO } from "../useCases/users/updateUser/IUpdateUserDTO";

interface IUserRepository {
  save(user: ICreateUserDTO): Promise<void>;
  update(user: IUpdateUserDTO, id: number): Promise<void>;
  existsUserToken(id: number, email: string): Promise<IUsersAttributes | null>;
  existsEmail(email: string): Promise<IUsersAttributes | null>;
  delete(id: number): Promise<void>;
  existsId(id: number): Promise<IUsersAttributes | null>;
  read(id: number): Promise<IUsersAttributes[]>;
}

export { IUserRepository };
