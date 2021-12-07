"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfilePicture = void 0;
class CreateProfilePicture {
    storageServiceProfilePicture;
    profilePictureRepository;
    constructor(storageServiceProfilePicture, profilePictureRepository) {
        this.storageServiceProfilePicture = storageServiceProfilePicture;
        this.profilePictureRepository = profilePictureRepository;
    }
    async create(picture, student_id) {
        await this.storageServiceProfilePicture.saveFile(picture.filename);
        const url = this.storageServiceProfilePicture.getUrl(picture.filename);
        const pictureProfile = Object.assign(picture, {
            url,
            student_id,
        });
        await this.profilePictureRepository.save(pictureProfile);
    }
}
exports.CreateProfilePicture = CreateProfilePicture;
//# sourceMappingURL=CreateProfilePicture.js.map