import { Request, Response } from "express";

import { IReadStudent } from "../../useCases/students/readStudent/IReadStudent";
import { IReadStudentDTO } from "../../useCases/students/readStudent/IReadStudentDTO";

class ReadStudentController {
  constructor(private readStudent: IReadStudent) {}

  async read(req: Request, res: Response): Promise<Response> {
    const student: IReadStudentDTO = {
      id: parseFloat(req.params.id) || undefined,
    };

    try {
      const students = await this.readStudent.execute(student);

      return res.status(200).send(students);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { ReadStudentController };
