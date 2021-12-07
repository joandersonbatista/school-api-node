import { IDeleteProfilePictureDTO } from "./IDeleteProfilePictureDTO";

interface IDeleteProfilePicture {
  execute(student_id: IDeleteProfilePictureDTO): Promise<void>;
}

export { IDeleteProfilePicture };
