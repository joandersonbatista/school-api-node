import { IDeleteStudentDTO } from "./DeleteStudentDTO";

interface IDeleteStudent {
  execute(id: IDeleteStudentDTO): Promise<void>;
}

export { IDeleteStudent };
