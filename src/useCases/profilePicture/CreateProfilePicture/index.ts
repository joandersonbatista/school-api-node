import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { CreateProfilePicture } from "./CreateProfilePicture";

const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const profilePictureRepository = new MysqlProfilePictureRepository();
const createProfilePicture = new CreateProfilePicture(
  storageServiceProfilePicture,
  profilePictureRepository,
);

export { createProfilePicture };
