import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { IDeleteProfilePicture } from "../../profilePicture/deleteProfilePicture/IDeleteProfilePicture";
import { IDeleteStudentDTO } from "./DeleteStudentDTO";
import { IDeleteStudent } from "./IDeleteStudent";

class DeleteStudent implements IDeleteStudent {
  constructor(
    private deleteStudentRepository: IStudentRepository,
    private deleteProfilePicture: IDeleteProfilePicture,
  ) {}

  async execute(student: IDeleteStudentDTO): Promise<void> {
    if (isNaN(student.student_id)) {
      throw new Error("Invalid id");
    }

    const existsId = await this.deleteStudentRepository.existsId(
      student.student_id,
    );

    if (existsId === null) {
      throw new Error("non-existent user");
    }

    await this.deleteProfilePicture.execute(student);

    await this.deleteStudentRepository.delete(student.student_id);
  }
}

export { DeleteStudent };
