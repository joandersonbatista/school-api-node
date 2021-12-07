"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const MysqlProfilePictureRepository_1 = require("../../../repositories/mysql/MysqlProfilePictureRepository");
const CreateProfilePicture_1 = require("./CreateProfilePicture");
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const profilePictureRepository = new MysqlProfilePictureRepository_1.MysqlProfilePictureRepository();
const createProfilePicture = new CreateProfilePicture_1.CreateProfilePicture(storageServiceProfilePicture, profilePictureRepository);
exports.createProfilePicture = createProfilePicture;
//# sourceMappingURL=index.js.map