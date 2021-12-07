"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProfilePicture = void 0;
class UpdateProfilePicture {
    profilePictureRepository;
    storageServiceProfilePicture;
    constructor(profilePictureRepository, storageServiceProfilePicture) {
        this.profilePictureRepository = profilePictureRepository;
        this.storageServiceProfilePicture = storageServiceProfilePicture;
    }
    async execute(picture, student_id) {
        const oldProfilePicture = await this.profilePictureRepository.existsProfilePicture(student_id);
        await this.storageServiceProfilePicture.deleteFile(oldProfilePicture.filename);
        await this.storageServiceProfilePicture.saveFile(picture.filename);
        const url = this.storageServiceProfilePicture.getUrl(picture.filename);
        const pictureProfile = Object.assign(picture, {
            url,
            student_id,
        });
        await this.profilePictureRepository.update(pictureProfile, student_id);
    }
}
exports.UpdateProfilePicture = UpdateProfilePicture;
//# sourceMappingURL=UpdateProfilePicture.js.map