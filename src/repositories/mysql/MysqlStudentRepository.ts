import { Student } from "../../models/mysql/StudentsModel";
import { IStudentsAttributes } from "../../models/IStudentsAttributes";
import { IStudentRepository } from "../IstudentRepository";
import { IUpdateStudentDTO } from "../../useCases/students/UpdateStudent/IUpdateStudentDTO";
import { ICreateStudentDTO } from "../../useCases/students/createStudent/ICreateStudentDTO";

class MysqlStudentRepository implements IStudentRepository {
  async save(student: ICreateStudentDTO): Promise<IStudentsAttributes> {
    await Student.create(student);

    const studentCreated = await Student.findOne({
      where: { email: student.email },
      include: { association: "profile_picture" },
    });

    return studentCreated!.get();
  }

  async existsEmail(email: string): Promise<IStudentsAttributes | null> {
    const existsEmail = await Student.findOne({
      where: { email: email },
    });

    if (existsEmail === null) return null;

    const studentEmail = await Student.findOne({
      where: { email },
      include: { association: "profile_picture" },
    });

    return studentEmail!.get();
  }

  async delete(id: number): Promise<void> {
    await Student.destroy({ where: { id } });
  }

  async existsId(id: number): Promise<IStudentsAttributes | null> {
    const existsId = await Student.findOne({ where: { id } });

    if (existsId === null) return null;

    const studentId = await Student.findOne({
      where: { id },
      include: { association: "profile_picture" },
    });

    return studentId!.get();
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

  async update(
    student: IUpdateStudentDTO,
    id: number | string,
  ): Promise<IStudentsAttributes> {
    await Student.update(student, { where: { id } });

    const studentCreated = await Student.findOne({
      where: { id },
      include: { association: "profile_picture" },
    });

    return studentCreated!.get();
  }
}

export { MysqlStudentRepository };
