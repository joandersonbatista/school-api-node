import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { profilePictureRepository } from "../../../utils/chooseApplicationDatabase";
import { UpdateProfilePicture } from "./UpdateProfilePicture";

const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const updateProfilePicture = new UpdateProfilePicture(
  profilePictureRepository(),
  storageServiceProfilePicture,
);

export { updateProfilePicture };
