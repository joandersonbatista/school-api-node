import bcryptjs from "bcryptjs";
import { sign } from "jsonwebtoken";

import { IUserRepository } from "../../../repositories/IUserRepository";
import { ISignIn, IUserLogin } from "./ISignIn";
import { ISignInDTO } from "./ISignInDTO";

class SignIn implements ISignIn {
  constructor(private signInRepository: IUserRepository) {}

  async execute(user: ISignInDTO): Promise<IUserLogin> {
    if (user.email === undefined || user.password === undefined) {
      throw new Error("Invalid credentials");
    }

    const existsUser = await this.signInRepository.existsEmail(user.email);

    if (existsUser === null) {
      throw new Error("User does not exist");
    }

    const { password_hash, email, id, name } = existsUser;

    const passwordHash = await bcryptjs.compare(user.password, password_hash);

    if (passwordHash) {
      const { email } = user;
      const id = existsUser.id;

      const token = sign({ id, email }, process.env.TOKEN_SECRET!, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      const userLogin: IUserLogin = { token, email, id, name };
      return userLogin;
    } else {
      throw new Error("invalid password");
    }
  }
}

export { SignIn };
