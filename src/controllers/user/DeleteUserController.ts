import { Request, Response } from "express";

import { IDeleteUser } from "../../useCases/users/deleteUser/IDeleteUser";
import { IDeletedUserDTO } from "../../useCases/users/deleteUser/IDeleteUserDTO";

class DeleteUserController {
  constructor(private deleteUser: IDeleteUser) {}

  async delete(req: Request, res: Response): Promise<Response> {
    const deleteUser: IDeletedUserDTO = { id: req.userId! };

    try {
      await this.deleteUser.execute(deleteUser);
      return res.status(200).send();
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { DeleteUserController };
