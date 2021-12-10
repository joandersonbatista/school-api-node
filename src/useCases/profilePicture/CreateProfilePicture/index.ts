import { S3StorageServiceProfilePicture } from "../../../providers/implementation/S3StorageServiceProfilePicture";
import { MongoDbProfilePictureRepository } from "../../../repositories/mongoDb/MongoDbProfilePictureRepository";
import { MysqlProfilePictureRepository } from "../../../repositories/mysql/MysqlProfilePictureRepository";
import { CreateProfilePicture } from "./CreateProfilePicture";

const mysqlProfilePictureRepository = new MysqlProfilePictureRepository();
const mongoDbProfilePictureRepository = new MongoDbProfilePictureRepository();
const storageServiceProfilePicture = new S3StorageServiceProfilePicture();
const createProfilePicture = new CreateProfilePicture(
  // mysqlProfilePictureRepository,
  mongoDbProfilePictureRepository,
  storageServiceProfilePicture,
);

export { createProfilePicture };
