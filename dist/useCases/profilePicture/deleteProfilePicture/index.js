"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const DeleteProfilePicture_1 = require("./DeleteProfilePicture");
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const deleteProfilePicture = new DeleteProfilePicture_1.DeleteProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), storageServiceProfilePicture);
exports.deleteProfilePicture = deleteProfilePicture;
//# sourceMappingURL=index.js.map