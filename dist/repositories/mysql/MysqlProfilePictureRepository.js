"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlProfilePictureRepository = void 0;
const ProfilePicture_1 = require("../../models/mysql/ProfilePicture");
class MysqlProfilePictureRepository {
    async save(picture) {
        return (await ProfilePicture_1.ProfilePicture.create(picture)).get();
    }
    async update(picture, id) {
        await ProfilePicture_1.ProfilePicture.update(picture, { where: { id } });
        return await ProfilePicture_1.ProfilePicture.findOne({ where: { id } }).then((student) => {
            return student?.get();
        });
    }
    async delete(student_id) {
        await ProfilePicture_1.ProfilePicture.destroy({ where: { student_id } });
    }
    async existsProfilePicture(student_id) {
        const existsPicture = await ProfilePicture_1.ProfilePicture.findOne({
            where: { student_id },
        });
        if (existsPicture === null)
            return null;
        return existsPicture.get();
    }
}
exports.MysqlProfilePictureRepository = MysqlProfilePictureRepository;
//# sourceMappingURL=MysqlProfilePictureRepository.js.map