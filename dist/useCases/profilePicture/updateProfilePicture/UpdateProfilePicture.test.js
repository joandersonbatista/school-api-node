"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const UpdateProfilePicture_1 = require("./UpdateProfilePicture");
const updateProfilePicture = new UpdateProfilePicture_1.UpdateProfilePicture(UtilsStudentTesting_1.utilsStudentTesting.getProfilePictureRepository(), UtilsStudentTesting_1.utilsStudentTesting.storageServiceProfilePicture);
let profilePictureData;
let student_id;
beforeAll(async () => {
    const { id } = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
    const profilePicture = await UtilsStudentTesting_1.utilsStudentTesting.createProfilePictureData(id);
    student_id = id;
    profilePictureData = profilePicture;
});
afterAll(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("update profile picture", () => {
    it("must be possible update profile picture", async () => {
        await expect(updateProfilePicture.execute(profilePictureData, student_id)).resolves.toBeUndefined();
    });
});
//# sourceMappingURL=UpdateProfilePicture.test.js.map