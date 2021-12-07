import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { UpdateProfilePicture } from "./UpdateProfilePicture";

const profilePictureRepository = new MysqlProfilePictureRepository();
const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const updateProfilePicture = new UpdateProfilePicture(
  profilePictureRepository,
  storageServiceProfilePicture,
);

export { updateProfilePicture };
