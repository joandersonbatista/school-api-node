import { IUpdateUserDTO } from "./IUpdateUserDTO";

interface IUpdateUser {
  execute(user: IUpdateUserDTO): Promise<void>;
}

export { IUpdateUser };
