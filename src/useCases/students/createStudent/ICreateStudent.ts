import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { ICreateStudentDTO } from "./ICreateStudentDTO";

interface ICreateStudent {
  execute(student: ICreateStudentDTO): Promise<IStudentsAttributes>;
}

export { ICreateStudent };
