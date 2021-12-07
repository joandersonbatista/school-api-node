"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const MysqlProfilePictureRepository_1 = require("../../../repositories/mysql/MysqlProfilePictureRepository");
const DeleteProfilePicture_1 = require("./DeleteProfilePicture");
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const profilePictureRepository = new MysqlProfilePictureRepository_1.MysqlProfilePictureRepository();
const deleteProfilePicture = new DeleteProfilePicture_1.DeleteProfilePicture(profilePictureRepository, storageServiceProfilePicture);
exports.deleteProfilePicture = deleteProfilePicture;
//# sourceMappingURL=index.js.map