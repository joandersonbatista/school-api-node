import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { IStudentRepository } from "../../../repositories/IstudentRepository";
import { IReadStudent } from "./IReadStudent";
import { IReadStudentDTO } from "./IReadStudentDTO";

class ReadStudent implements IReadStudent {
  constructor(private readStudentRepository: IStudentRepository) {}

  async execute(student: IReadStudentDTO): Promise<IStudentsAttributes[]> {
    if (student.id !== undefined && isNaN(student.id)) {
      throw new Error("Invalid id");
    }

    if (student.id === undefined) {
      return this.readStudentRepository.read();
    }

    const existsId = await this.readStudentRepository.existsId(student.id);
    if (existsId === null) {
      throw new Error("Non-existent student");
    }

    return await this.readStudentRepository.read(student.id);
  }
}

export { ReadStudent };
