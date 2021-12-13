import { JwtPayload, TokenExpiredError, verify } from "jsonwebtoken";

import { ILoginRequired } from "./ILoginRequired";
import { ILoginRequiredDTO } from "./ILoginRequiredDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";

class LoginRequired implements ILoginRequired {
  constructor(private userRepository: IUserRepository) {}

  async execute(token: string): Promise<ILoginRequiredDTO> {
    verify(token, process.env.TOKEN_SECRET!, (err) => {
      if (err instanceof TokenExpiredError) throw new Error("expired token");
      if (err) throw new Error("invalid token");
    });

    const data = verify(token, process.env.TOKEN_SECRET!) as JwtPayload;

    const { id, email } = data;

    const existsUserToken = await this.userRepository.existsUserToken(
      id,
      email,
    );

    if (existsUserToken === null) {
      throw new Error("login required");
    }

    return { id, email };
  }
}

export { LoginRequired };
