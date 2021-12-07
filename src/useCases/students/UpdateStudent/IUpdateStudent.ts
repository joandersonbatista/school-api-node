import { IUpdateStudentDTO } from "./IUpdateStudentDTO";

interface IUpdateStudent {
  execute(student: IUpdateStudentDTO, picture?: Express.Multer.File): Promise<void>;
}

export { IUpdateStudent };
