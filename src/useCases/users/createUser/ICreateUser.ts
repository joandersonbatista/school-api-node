import { ICreateUserDTO } from "./ICreateUserDTO";

interface ICreateUser {
  execute(data: ICreateUserDTO): Promise<void>;
}

export { ICreateUser };
