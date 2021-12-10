import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { IReadStudent } from "./IReadStudent";
import { IReadStudentDTO } from "./IReadStudentDTO";

class ReadStudent implements IReadStudent {
  constructor(private studentRepository: IStudentRepository) {}

  async execute(student: IReadStudentDTO): Promise<IStudentsAttributes[]> {
    if (student.id === undefined) {
      return this.studentRepository.read();
    }

    const existsId = await this.studentRepository.existsId(student.id);
    if (existsId === null) {
      throw new Error("Non-existent student");
    }

    return await this.studentRepository.read(student.id);
  }
}

export { ReadStudent };
