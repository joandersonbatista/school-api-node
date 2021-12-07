import { IUsersAttributes } from "../../../models/IUserAttributes";
import { IReadUserDTO } from "./IReadUserDTO";

interface IReadUser {
  execute(id: IReadUserDTO): Promise<IUsersAttributes[]>;
}

export { IReadUser };
