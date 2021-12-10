import { IStudentsAttributes } from "../models/IStudentsAttributes";
import { ICreateStudentDTO } from "../useCases/students/createStudent/ICreateStudentDTO";
import { IUpdateStudentDTO } from "../useCases/students/UpdateStudent/IUpdateStudentDTO";

interface IStudentRepository {
  save(student: ICreateStudentDTO): Promise<IStudentsAttributes>;
  update(student: IUpdateStudentDTO, id: number | string): Promise<void>;
  existsEmail(email: string): Promise<IStudentsAttributes | null>;
  delete(id: number | string): Promise<void>;
  existsId(id: number | string): Promise<IStudentsAttributes | null>;
  read(id?: number | string): Promise<IStudentsAttributes[]>;
}

export { IStudentRepository };
