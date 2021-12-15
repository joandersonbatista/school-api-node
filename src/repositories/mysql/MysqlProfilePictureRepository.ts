import { IProfilePictureAttributes } from "../../models/IProfilePictureAttributes";
import { ProfilePicture } from "../../models/mysql/ProfilePicture";
import { ICreateProfilePictureDTO } from "../../useCases/profilePicture/CreateProfilePicture/ICreateProfilePictureDTO";
import { IUpdateProfilePictureDTO } from "../../useCases/profilePicture/updateProfilePicture/IUpdateProfilePictureDTO";
import { IProfilePictureRepository } from "../IProfilePictureRepository";

class MysqlProfilePictureRepository implements IProfilePictureRepository {
  async save(
    picture: ICreateProfilePictureDTO,
  ): Promise<IProfilePictureAttributes> {
    return (await ProfilePicture.create(picture)).get();
  }

  async update(
    picture: IUpdateProfilePictureDTO,
    id: number,
  ): Promise<IProfilePictureAttributes> {
    await ProfilePicture.update(picture, { where: { id } });
    return await ProfilePicture.findOne({ where: { id } }).then((student) => {
      return student?.get() as IProfilePictureAttributes;
    });
  }

  async delete(student_id: number): Promise<void> {
    await ProfilePicture.destroy({ where: { student_id } });
  }

  async existsProfilePicture(
    student_id: number,
  ): Promise<IProfilePictureAttributes | null> {
    const existsPicture = await ProfilePicture.findOne({
      where: { student_id },
    });

    if (existsPicture === null) return null;
    return existsPicture.get();
  }
}

export { MysqlProfilePictureRepository };
