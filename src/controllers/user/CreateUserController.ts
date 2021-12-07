import { Request, Response } from "express";

import { ICreateUser } from "../../useCases/users/createUser/ICreateUser";
import { ICreateUserDTO } from "../../useCases/users/createUser/ICreateUserDTO";

class CreateUserController {
  constructor(private createUser: ICreateUser) {}

  async create(req: Request, res: Response): Promise<Response> {
    const user: ICreateUserDTO = req.body;

    try {
      await this.createUser.execute(user);
      return res.status(201).send();
    } catch (err) {
      if (err instanceof Error)
        return res.status(400).json({ message: err.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { CreateUserController };
