import { IStorageServiceProfilePicture } from "../../../providers/IStorageServiceProfilePicture";
import { IProfilePictureRepository } from "../../../repositories/IProfilePictureRepository";
import { IUpdateProfilePicture } from "./IUpdateProfilePicture";
import { IUpdateProfilePictureDTO } from "./IUpdateProfilePictureDTO";

class UpdateProfilePicture implements IUpdateProfilePicture {
  constructor(
    private profilePictureRepository: IProfilePictureRepository,
    private storageServiceProfilePicture: IStorageServiceProfilePicture,
  ) {}

  async execute(
    picture: Express.Multer.File,
    student_id: number | string,
  ): Promise<void> {
    const oldProfilePicture =
      await this.profilePictureRepository.existsProfilePicture(student_id);

    await this.storageServiceProfilePicture.deleteFile(
      oldProfilePicture!.filename!,
    );

    await this.storageServiceProfilePicture.saveFile(picture.filename);

    const url = this.storageServiceProfilePicture.getUrl(picture.filename);

    const pictureProfile: IUpdateProfilePictureDTO = Object.assign(picture, {
      url,
      student_id,
    });

    await this.profilePictureRepository.update(pictureProfile, student_id);
  }
}

export { UpdateProfilePicture };
