import { MongoDbProfilePicture } from "../../models/mongoDb/MongoDbProfilePictures";
import { IProfilePictureAttributes } from "../../models/IProfilePictureAttributes";
import { ICreateProfilePictureDTO } from "../../useCases/profilePicture/CreateProfilePicture/CreateProfilePictureDTO";
import { IUpdateProfilePictureDTO } from "../../useCases/profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";
import { IProfilePictureRepository } from "../IProfilePictureRepository";

class MongoDbProfilePictureRepository implements IProfilePictureRepository {
  async save(picture: ICreateProfilePictureDTO): Promise<void> {
    await MongoDbProfilePicture.create(picture);
  }

  async update(picture: IUpdateProfilePictureDTO, id: number | string): Promise<void> {
    await MongoDbProfilePicture.updateOne({ id }, picture);
  }

  async delete(student_id: string | string): Promise<void> {
    await MongoDbProfilePicture.deleteOne({ student_id });
  }

  async existsProfilePicture(
    student_id: number | string,
  ): Promise<IProfilePictureAttributes | null> {
    return await MongoDbProfilePicture.findOne({ student_id });
  }
}

export { MongoDbProfilePictureRepository };
