import { Request, Response } from "express";
import { ISignIn } from "../../useCases/users/signin/ISignIn";
import { ISignInDTO } from "../../useCases/users/signin/ISignInDTO";

class SignInController {
  constructor(private signIn: ISignIn) {}

  async token(req: Request, res: Response): Promise<Response> {
    const user: ISignInDTO = req.body;

    try {
      const userLogin = await this.signIn.execute(user);

      return res.status(200).send(userLogin);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { SignInController };
