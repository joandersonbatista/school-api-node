import { IProfilePictureAttributes } from "../models/IProfilePictureAttributes";
import { ICreateProfilePictureDTO } from "../useCases/profilePicture/CreateProfilePicture/CreateProfilePictureDTO";
import { IUpdateProfilePictureDTO } from "../useCases/profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";

interface IProfilePictureRepository {
  save(picture: ICreateProfilePictureDTO): Promise<void>;
  update(picture: IUpdateProfilePictureDTO, id: number | string): Promise<void>;
  delete(student_id: number | string): Promise<void>
  existsProfilePicture(
    student_id: number | string,
  ): Promise<IProfilePictureAttributes | null>;
}

export { IProfilePictureRepository };
