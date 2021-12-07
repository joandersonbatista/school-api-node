import { Request, Response } from "express";

import { IUpdateUser } from "../../useCases/users/updateUser/IUpdateUser";
import { IUpdateUserDTO } from "../../useCases/users/updateUser/IUpdateUserDTO";

class UpdateUserController {
  constructor(public updateUser: IUpdateUser) {}

  async update(req: Request, res: Response): Promise<Response> {
    const updateAttributes: IUpdateUserDTO = req.body;
    updateAttributes.id = req.userId!;

    try {
      await this.updateUser.execute(updateAttributes);
      return res.status(200).send();
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { UpdateUserController };
