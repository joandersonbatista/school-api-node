import { ICreateStudentDTO } from "./ICreateStudentDTO";

interface ICreateStudent {
  execute(student: ICreateStudentDTO): Promise<void>;
}

export { ICreateStudent };
