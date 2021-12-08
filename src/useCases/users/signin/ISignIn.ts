import { ISignInDTO } from "./ISignInDTO";

interface ISignIn {
  execute(user: ISignInDTO): Promise<string>;
}

export { ISignIn };
