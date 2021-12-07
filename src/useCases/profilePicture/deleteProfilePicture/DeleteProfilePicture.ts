import { IStorageServiceProfilePicture } from "../../../providers/IStorageServiceProfilePicture";
import { IProfilePictureRepository } from "../../../repositories/IProfilePictureRepository";
import { IDeleteProfilePicture } from "./IDeleteProfilePicture";
import { IDeleteProfilePictureDTO } from "./IDeleteProfilePictureDTO";

class DeleteProfilePicture implements IDeleteProfilePicture {
  constructor(
    private profilePictureRepository: IProfilePictureRepository,
    private storageServiceProfilePicture: IStorageServiceProfilePicture,
  ) {}

  async execute(student: IDeleteProfilePictureDTO): Promise<void> {
    const existsProfilePicture =
      await this.profilePictureRepository.existsProfilePicture(student.student_id);

    if (existsProfilePicture === null) return;

    await this.storageServiceProfilePicture.deleteFile(
      existsProfilePicture.filename,
    );
  }
}

export { DeleteProfilePicture };
