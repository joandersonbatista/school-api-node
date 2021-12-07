import { verify } from "jsonwebtoken";

import { ILoginRequired } from "./ILoginRequired";
import { ILoginRequiredDTO } from "./ILoginRequiredDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class LoginRequired implements ILoginRequired {
  constructor(private userRepository: IUserRepository) {}

  async execute(token: string): Promise<ILoginRequiredDTO> {
    const data = verify(token, process.env.TOKEN_SECRET!) as ILoginRequiredDTO;

    const existsToken = await this.userRepository.existsUserToken(
      data.id,
      data.email,
    );

    if (existsToken === null) {
      throw new Error("invalid token");
    }

    return data;
  }
}

export { LoginRequired };
