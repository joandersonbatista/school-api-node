import { IDeletedUserDTO } from "./IDeleteUserDTO";

interface IDeleteUser {
  execute(id: IDeletedUserDTO): Promise<void>;
}

export { IDeleteUser };
