import { IProfilePictureAttributes } from "../models/IProfilePictureAttributes";
import { ICreateProfilePictureDTO } from "../useCases/profilePicture/CreateProfilePicture/ICreateProfilePictureDTO";
import { IUpdateProfilePictureDTO } from "../useCases/profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";

interface IProfilePictureRepository {
  save(picture: ICreateProfilePictureDTO): Promise<IProfilePictureAttributes>;
  update(picture: IUpdateProfilePictureDTO, id: number | string): Promise<IProfilePictureAttributes>;
  delete(student_id: number | string): Promise<void>
  existsProfilePicture(
    student_id: number | string,
  ): Promise<IProfilePictureAttributes | null>;
}

export { IProfilePictureRepository };
