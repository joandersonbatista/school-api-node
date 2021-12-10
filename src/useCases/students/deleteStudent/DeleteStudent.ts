import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { IDeleteProfilePicture } from "../../profilePicture/deleteProfilePicture/IDeleteProfilePicture";
import { IDeleteStudentDTO } from "./DeleteStudentDTO";
import { IDeleteStudent } from "./IDeleteStudent";

class DeleteStudent implements IDeleteStudent {
  constructor(
    private studentRepository: IStudentRepository,
    private deleteProfilePicture: IDeleteProfilePicture,
  ) {}

  async execute(student: IDeleteStudentDTO): Promise<void> {

    const existsId = await this.studentRepository.existsId(
      student.student_id,
    );

    if (existsId === null) {
      throw new Error("non-existent user");
    }

    await this.deleteProfilePicture.execute(student);

    await this.studentRepository.delete(student.student_id);
  }
}

export { DeleteStudent };
