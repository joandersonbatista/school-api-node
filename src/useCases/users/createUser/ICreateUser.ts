import { ICreateUserDTO } from "./ICreateUserDTO";

interface ICreateUser {
  execute(user: ICreateUserDTO): Promise<void>;
}

export { ICreateUser };
