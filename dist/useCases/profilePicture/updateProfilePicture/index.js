"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const MysqlProfilePictureRepository_1 = require("../../../repositories/mysql/MysqlProfilePictureRepository");
const UpdateProfilePicture_1 = require("./UpdateProfilePicture");
const profilePictureRepository = new MysqlProfilePictureRepository_1.MysqlProfilePictureRepository();
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const updateProfilePicture = new UpdateProfilePicture_1.UpdateProfilePicture(profilePictureRepository, storageServiceProfilePicture);
exports.updateProfilePicture = updateProfilePicture;
//# sourceMappingURL=index.js.map