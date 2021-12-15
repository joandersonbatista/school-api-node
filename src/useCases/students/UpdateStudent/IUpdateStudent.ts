import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { IUpdateProfilePictureDTO } from "../../profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";
import { IUpdateStudentDTO } from "./IUpdateStudentDTO";

type CreateProfilePictureType = Omit<Express.Multer.File, "stream" | "buffer">

interface IUpdateStudent {
  execute(
    student: IUpdateStudentDTO,
    picture?: CreateProfilePictureType | IUpdateProfilePictureDTO,
  ): Promise<IStudentsAttributes>
}

export { IUpdateStudent, CreateProfilePictureType };
