"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProfilePicture = void 0;
class DeleteProfilePicture {
    profilePictureRepository;
    storageServiceProfilePicture;
    constructor(profilePictureRepository, storageServiceProfilePicture) {
        this.profilePictureRepository = profilePictureRepository;
        this.storageServiceProfilePicture = storageServiceProfilePicture;
    }
    async execute(student) {
        const existsProfilePicture = await this.profilePictureRepository.existsProfilePicture(student.student_id);
        if (existsProfilePicture === null)
            return;
        await this.storageServiceProfilePicture.deleteFile(existsProfilePicture.filename);
    }
}
exports.DeleteProfilePicture = DeleteProfilePicture;
//# sourceMappingURL=DeleteProfilePicture.js.map