import { ISignInDTO } from "./ISignInDTO";

interface IUserLogin {
  token: string;
  email: string;
  id: number | string;
  name: string;
}

interface ISignIn {
  execute(user: ISignInDTO): Promise<IUserLogin>;
}

export { ISignIn, IUserLogin };
