import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { profilePictureRepository } from "../../../utils/chooseApplicationDatabase";
import { DeleteProfilePicture } from "./DeleteProfilePicture";

const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const deleteProfilePicture = new DeleteProfilePicture(
  profilePictureRepository(),
  storageServiceProfilePicture,
);

export { deleteProfilePicture };
