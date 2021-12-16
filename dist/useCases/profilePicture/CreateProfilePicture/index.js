"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfilePicture = void 0;
const S3StorageServiceProfilePicture_1 = require("../../../providers/implementation/S3StorageServiceProfilePicture");
const chooseApplicationDatabase_1 = require("../../../utils/chooseApplicationDatabase");
const CreateProfilePicture_1 = require("./CreateProfilePicture");
const storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
const createProfilePicture = new CreateProfilePicture_1.CreateProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), storageServiceProfilePicture);
exports.createProfilePicture = createProfilePicture;
//# sourceMappingURL=index.js.map