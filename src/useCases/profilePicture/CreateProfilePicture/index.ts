import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { profilePictureRepository } from "../../../utils/chooseApplicationDatabase";
import { CreateProfilePicture } from "./CreateProfilePicture";

const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const createProfilePicture = new CreateProfilePicture(
  profilePictureRepository(),
  storageServiceProfilePicture,
);

export { createProfilePicture };
