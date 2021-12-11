import { IStudentsAttributes } from "../../models/IStudentsAttributes";
import { MongoDbStudents } from "../../models/mongoDb/MongoDbStudent";
import { ICreateStudentDTO } from "../../useCases/students/createStudent/ICreateStudentDTO";
import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { IStudentRepository } from "../IstudentRepository";

class MongoDbStudentRepository implements IStudentRepository {
  async save(student: ICreateStudentDTO): Promise<IStudentsAttributes> {
    return await MongoDbStudents.create(student);
  }

  async update(student: IUpdateStudentDTO, id: number): Promise<void> {
    await MongoDbStudents.updateOne({ id }, student);
  }

  async existsEmail(email: string): Promise<IStudentsAttributes | null> {
    const student = await MongoDbStudents.findOne({ email });

    if (student === null) return null;

    return student;
  }

  async delete(id: number): Promise<void> {
    await MongoDbStudents.deleteOne({ id });
  }

  async existsId(id: number): Promise<IStudentsAttributes | null> {
    const student = await MongoDbStudents.findOne({ id });

    if (student === null) return null;

    return student;
  }

  async read(id?: number | string): Promise<IStudentsAttributes[]> {
    if (id === undefined) {
      const findStudents = await MongoDbStudents.find().populate(
        "profile_picture",
      );

      const allStudents: IStudentsAttributes[] = [];

      findStudents.forEach((value) => {
        allStudents.push(value);
      });

      return allStudents!;
    }

    const student = await MongoDbStudents.findOne({ id }).populate(
      "profile_picture",
    );

    return new Array(student!);
  }
}

export { MongoDbStudentRepository };