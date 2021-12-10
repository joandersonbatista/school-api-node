import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MongoDbProfilePictureRepository } from "../../../repositories/mongoDb/MongoDbProfilePictureRepository";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { UpdateProfilePicture } from "./UpdateProfilePicture";

const mysqlProfilePictureRepository = new MysqlProfilePictureRepository();
const mongoDbProfilePictureRepository = new MongoDbProfilePictureRepository();
const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const updateProfilePicture = new UpdateProfilePicture(
  // mysqlProfilePictureRepository,
  mongoDbProfilePictureRepository,
  storageServiceProfilePicture,
);

export { updateProfilePicture };
