import { IStorageServiceProfilePicture } from "../../../providers/IStorageServiceProfilePicture";
import { IProfilePictureRepository } from "../../../repositories/IProfilePictureRepository";
import { ICreateProfilePicture } from "./ICreateProfilePicture";
import { ICreateProfilePictureDTO } from "./CreateProfilePictureDTO";

class CreateProfilePicture implements ICreateProfilePicture {
  constructor(
    private profilePictureRepository: IProfilePictureRepository,
    private storageServiceProfilePicture: IStorageServiceProfilePicture,
  ) {}

  async create(
    picture: Express.Multer.File,
    student_id: number | string,
  ): Promise<void> {
    await this.storageServiceProfilePicture.saveFile(picture.filename);

    const url = this.storageServiceProfilePicture.getUrl(picture.filename);

    const pictureProfile: ICreateProfilePictureDTO = Object.assign(picture, {
      url,
      student_id,
    });

    await this.profilePictureRepository.save(pictureProfile);
  }
}

export { CreateProfilePicture };
