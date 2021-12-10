import multer, { Multer } from "multer";
import { Request, Response } from "express";

import { IUpdateStudent } from "../../useCases/students/UpdateStudent/IUpdateStudent";
import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { multerConfig } from "../../config/multer";

class UpdateStudentController {
  private _multer: Multer = multer(multerConfig);

  constructor(private updateStudent: IUpdateStudent) {}

  async update(req: Request, res: Response): Promise<void> {
    const uploadPhoto = this._multer.single("photo");

    return uploadPhoto(req, res, async (error) => {
      if (error) return res.status(400).json({ message: error.field });

      const student: IUpdateStudentDTO = JSON.parse(JSON.stringify(req.body));
      student.id = req.params.id;
      try {
        if (req.file === undefined) {
          await this.updateStudent.execute(student, req.file!);

          return res.status(201).send();
        }
        await this.updateStudent.execute(student, req.file);

        return res.status(201).send();
      } catch (error) {
        if (error instanceof Error)
          return res.status(400).json({ message: error.message });

        return res.status(400).json({ message: "Unexpected error." });
      }
    });
  }
}

export { UpdateStudentController };
