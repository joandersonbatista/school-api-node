import { Request, Response } from "express";

import { IReadStudent } from "../../useCases/students/readStudent/IReadStudent";
import { IReadStudentDTO } from "../../useCases/students/readStudent/IReadStudentDTO";

class ReadStudentController {
  constructor(private readStudent: IReadStudent) {}

  async read(req: Request, res: Response): Promise<Response> {
    try {
      if (req.params.id) {
        const student: IReadStudentDTO = {
          id: req.params.id,
        };
        const students = await this.readStudent.execute(student);
        return res.status(200).send(students);
      }
      const students = await this.readStudent.execute();
      return res.status(200).send(students);
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { ReadStudentController };
