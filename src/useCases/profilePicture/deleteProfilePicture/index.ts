import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { DeleteProfilePicture } from "./DeleteProfilePicture";

const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const profilePictureRepository = new MysqlProfilePictureRepository();
const deleteProfilePicture = new DeleteProfilePicture(
  profilePictureRepository,
  storageServiceProfilePicture,
);

export { deleteProfilePicture };
