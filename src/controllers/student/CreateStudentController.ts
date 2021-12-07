import { Request, Response } from "express";

import { ICreateStudent } from "../../useCases/students/createStudent/ICreateStudent";
import { ICreateStudentDTO } from "../../useCases/students/createStudent/ICreateStudentDTO";

class CreateStudentController {
  constructor(private createStudent: ICreateStudent) {}

  async create(req: Request, res: Response): Promise<Response> {
    const student: ICreateStudentDTO = req.body;

    try {
      await this.createStudent.execute(student);

      return res.status(201).send();
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { CreateStudentController };
