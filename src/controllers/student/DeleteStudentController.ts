import { Request, Response } from "express";
import { IDeleteStudentDTO } from "../../useCases/students/deleteStudent/DeleteStudentDTO";
import { IDeleteStudent } from "../../useCases/students/deleteStudent/IDeleteStudent";

class DeleteStudentController {
  constructor(private deleteStudent: IDeleteStudent) {}

  async delete(req: Request, res: Response): Promise<Response> {
    const deleteStudent: IDeleteStudentDTO = { student_id: req.params.id };

    try {
      await this.deleteStudent.execute(deleteStudent);

      return res.status(200).send();
    } catch (error) {
      if (error instanceof Error)
        return res.status(400).json({ message: error.message });

      return res.status(400).json({ message: "Unexpected error." });
    }
  }
}

export { DeleteStudentController };
