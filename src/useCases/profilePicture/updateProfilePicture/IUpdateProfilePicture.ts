import { IUpdateProfilePictureDTO } from "./IUpdateProfilePictureDTO";

interface IUpdateProfilePicture {
  execute(
    profilePicture: IUpdateProfilePictureDTO,
    id: number | string,
  ): Promise<void>;
}

export { IUpdateProfilePicture };
