import { IProfilePictureAttributes } from "../../../models/IProfilePictureAttributes";
import { IStorageServiceProfilePicture } from "../../../providers/IStorageServiceProfilePicture";
import { IProfilePictureRepository } from "../../../repositories/IProfilePictureRepository";
import { ICreateProfilePicture } from "./ICreateProfilePicture";
import { ICreateProfilePictureDTO } from "./ICreateProfilePictureDTO";

class CreateProfilePicture implements ICreateProfilePicture {
  constructor(
    private profilePictureRepository: IProfilePictureRepository,
    private storageServiceProfilePicture: IStorageServiceProfilePicture,
  ) {}

  async create(
    picture: Omit<Express.Multer.File, "stream" | "buffer">,
    student_id: number | string,
  ): Promise<IProfilePictureAttributes> {
    await this.storageServiceProfilePicture.saveFile(picture.filename);

    const url = this.storageServiceProfilePicture.getUrl(picture.filename);

    const pictureProfile: ICreateProfilePictureDTO = Object.assign(picture, {
      url,
      student_id,
    });

    return await this.profilePictureRepository.save(pictureProfile);
  }
}

export { CreateProfilePicture };
