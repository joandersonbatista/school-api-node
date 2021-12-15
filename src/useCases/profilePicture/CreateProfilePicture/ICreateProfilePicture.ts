import { IProfilePictureAttributes } from "../../../models/IProfilePictureAttributes";

interface ICreateProfilePicture {
  create(
    picture: Omit<Express.Multer.File, "stream" | "buffer">,
    student_id: number | string,
  ): Promise<IProfilePictureAttributes>;
}

export { ICreateProfilePicture };
