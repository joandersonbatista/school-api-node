import { IUsersAttributes } from "../../../models/IUserAttributes";
import { ICreateUserDTO } from "./ICreateUserDTO";

interface ICreateUser {
  execute(user: ICreateUserDTO): Promise<IUsersAttributes>;
}

export { ICreateUser };
