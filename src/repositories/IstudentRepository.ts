import { IStudentsAttributes } from "../models/IStudentsAttributes";
import { ICreateStudentDTO } from "../useCases/students/createStudent/ICreateStudentDTO";
import { IUpdateStudentDTO } from "../useCases/students/UpdateStudent/IUpdateStudentDTO";

interface IStudentRepository {
  save(student: ICreateStudentDTO): Promise<IStudentsAttributes>;
  update(student: IUpdateStudentDTO, id: number): Promise<void>;
  existsEmail(email: string): Promise<IStudentsAttributes | null>;
  delete(id: number): Promise<void>;
  existsId(id: number): Promise<IStudentsAttributes | null>;
  read(id?: number): Promise<IStudentsAttributes[]>;
}

export { IStudentRepository };
