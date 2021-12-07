import { Student } from "../../models/mysql/StudentsModel";
import { IStudentsAttributes } from "../../models/IStudentsAttributes";
import { IStudentRepository } from "../IstudentRepository";
import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { ICreateStudentDTO } from "../../useCases/students/createStudent/ICreateStudentDTO";

class MysqlStudentRepository implements IStudentRepository {
  async save(student: ICreateStudentDTO): Promise<IStudentsAttributes> {
    return (await Student.create(student)).get();
  }

  async existsEmail(email: string): Promise<IStudentsAttributes | null> {
    const existsEmail = await Student.findOne({
      where: { email: email },
    });

    if (existsEmail === null) return null;

    return existsEmail.get();
  }

  async delete(id: number): Promise<void> {
    await Student.destroy({ where: { id } });
  }

  async existsId(id: number): Promise<IStudentsAttributes | null> {
    const existsId = await Student.findOne({ where: { id } });

    if (existsId === null) return null;

    return existsId.get();
  }

  async read(id?: number): Promise<IStudentsAttributes[]> {
    if (id === undefined) {
      const findStudents = await Student.findAll({
        include: { association: "profile_picture" },
      });

      const allStudents: IStudentsAttributes[] = [];

      findStudents.forEach((value) => {
        allStudents.push(value.get());
      });

      return allStudents!;
    }

    const studentId = await Student.findOne({
      where: { id },
      include: { association: "profile_picture" },
    });

    return new Array(studentId!.get());
  }

  async update(student: IUpdateStudentDTO, id: number): Promise<void> {
    await Student.update(student, { where: { id } });
  }
}

export { MysqlStudentRepository };
