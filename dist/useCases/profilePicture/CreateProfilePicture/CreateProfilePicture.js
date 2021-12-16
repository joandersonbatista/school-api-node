"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProfilePicture = void 0;
class CreateProfilePicture {
    profilePictureRepository;
    storageServiceProfilePicture;
    constructor(profilePictureRepository, storageServiceProfilePicture) {
        this.profilePictureRepository = profilePictureRepository;
        this.storageServiceProfilePicture = storageServiceProfilePicture;
    }
    async create(picture, student_id) {
        await this.storageServiceProfilePicture.saveFile(picture.filename);
        const url = this.storageServiceProfilePicture.getUrl(picture.filename);
        const pictureProfile = Object.assign(picture, {
            url,
            student_id,
        });
        return await this.profilePictureRepository.save(pictureProfile);
    }
}
exports.CreateProfilePicture = CreateProfilePicture;
//# sourceMappingURL=CreateProfilePicture.js.map