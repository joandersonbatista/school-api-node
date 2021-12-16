"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const DeleteProfilePicture_1 = require("./DeleteProfilePicture");
const deleteProfilePicture = new DeleteProfilePicture_1.DeleteProfilePicture(UtilsStudentTesting_1.utilsStudentTesting.getProfilePictureRepository(), UtilsStudentTesting_1.utilsStudentTesting.storageServiceProfilePicture);
let profilePictureData;
beforeAll(async () => {
    const { id } = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
    profilePictureData = { student_id: id };
    await UtilsStudentTesting_1.utilsStudentTesting.createProfilePictureData(id);
});
afterEach(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("delete profile picture", () => {
    it("muste be possible delete profile picture", async () => {
        await expect(deleteProfilePicture.execute(profilePictureData)).resolves.toBeUndefined();
    });
    it("should return undefined because there is no profile picture", async () => {
        const { id } = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
        profilePictureData = { student_id: id };
        await expect(deleteProfilePicture.execute(profilePictureData)).resolves.toBeUndefined();
    });
});
//# sourceMappingURL=DeleteProfilePicture.test.js.map