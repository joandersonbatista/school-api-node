"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const CreateProfilePicture_1 = require("./CreateProfilePicture");
const createProfilePicture = new CreateProfilePicture_1.CreateProfilePicture(UtilsStudentTesting_1.utilsStudentTesting.getProfilePictureRepository(), UtilsStudentTesting_1.utilsStudentTesting.storageServiceProfilePicture);
const profilePictureData = UtilsStudentTesting_1.utilsStudentTesting.picture;
let student_id;
const expectContainKeys = [
    "id",
    "fieldname",
    "originalname",
    "mimetype",
    "filename",
    "size",
    "url",
    "student_id",
    "created_at",
    "updated_at",
];
beforeAll(async () => {
    const { id } = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
    student_id = id;
});
afterAll(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("create profile picture", () => {
    it("must be possible create profile picture", async () => {
        await expect(createProfilePicture.create(profilePictureData, student_id)).resolves.toContainKeys(expectContainKeys);
    });
});
//# sourceMappingURL=CreateProfilePicture.test.js.map