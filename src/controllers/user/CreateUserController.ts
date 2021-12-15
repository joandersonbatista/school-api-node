import { Request, Response } from "express";

import { ICreateUser } from "../../useCases/users/createUser/ICreateUser";
import { ICreateUserDTO } from "../../useCases/users/createUser/ICreateUserDTO";

class CreateUserController {
  constructor(private createUser: ICreateUser) {}

  async create(req: Request, res: Response): Promise<Response> {
    const user: ICreateUserDTO = req.body;
    if (!user.email) {
      return res.status(400).json({
        message: "email is required",
      });
    }
    if (!user.name) {
      return res.status(400).json({
        message: "name is required",
      });
    }
    if (!user.password) {
      return res.status(400).json({
        message: "password is required",
      });
    }
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
