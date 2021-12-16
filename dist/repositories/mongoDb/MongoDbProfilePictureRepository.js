"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbProfilePictureRepository = void 0;
const MongoDbProfilePictures_1 = require("../../models/mongoDb/MongoDbProfilePictures");
class MongoDbProfilePictureRepository {
    async save(picture) {
        return await MongoDbProfilePictures_1.MongoDbProfilePicture.create(picture);
    }
    async update(picture, id) {
        const profilePicture = await MongoDbProfilePictures_1.MongoDbProfilePicture.updateOne({ id }, picture).findOne({
            id,
        });
        return profilePicture;
    }
    async delete(student_id) {
        await MongoDbProfilePictures_1.MongoDbProfilePicture.deleteOne({ student_id });
    }
    async existsProfilePicture(student_id) {
        return await MongoDbProfilePictures_1.MongoDbProfilePicture.findOne({ student_id });
    }
}
exports.MongoDbProfilePictureRepository = MongoDbProfilePictureRepository;
//# sourceMappingURL=MongoDbProfilePictureRepository.js.map