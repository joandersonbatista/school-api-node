import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MongoDbProfilePictureRepository } from "../../../repositories/mongoDb/MongoDbProfilePictureRepository";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { DeleteProfilePicture } from "./DeleteProfilePicture";

const mysqlProfilePictureRepository = new MysqlProfilePictureRepository();
const mongoDbProfilePictureRepository = new MongoDbProfilePictureRepository();
const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const deleteProfilePicture = new DeleteProfilePicture(
  // mysqlProfilePictureRepository,
  mongoDbProfilePictureRepository,
  storageServiceProfilePicture,
);

export { deleteProfilePicture };
