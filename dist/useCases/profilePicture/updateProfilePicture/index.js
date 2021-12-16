"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const UpdateProfilePicture_1 = require("./UpdateProfilePicture");
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const updateProfilePicture = new UpdateProfilePicture_1.UpdateProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), storageServiceProfilePicture);
exports.updateProfilePicture = updateProfilePicture;
//# sourceMappingURL=index.js.map