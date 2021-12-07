import { Request, Response } from "express";

import { IReadUser } from "../../useCases/users/readUser/IReadUser";
import { IReadUserDTO } from "../../useCases/users/readUser/IReadUserDTO";

class ReadUserController {
  constructor(private readUser: IReadUser) {}

  async readOne(req: Request, res: Response): Promise<Response> {
    const readUser: IReadUserDTO = { id: req.userId! };
    try {
      const user = await this.readUser.execute(readUser);

      return res.status(200).send(user);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { ReadUserController };
