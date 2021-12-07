import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { IReadStudentDTO } from "./IReadStudentDTO";

interface IReadStudent {
  execute(id?: IReadStudentDTO): Promise<IStudentsAttributes[]>;
}

export { IReadStudent };
