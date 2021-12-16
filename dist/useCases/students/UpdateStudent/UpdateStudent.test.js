"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UpdateStudent_1 = require("./UpdateStudent");
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const updateStudent = new UpdateStudent_1.UpdateStudent(UtilsStudentTesting_1.utilsStudentTesting.getRepository(), UtilsStudentTesting_1.utilsStudentTesting.studentUpdateValidations, UtilsStudentTesting_1.utilsStudentTesting.createProfilePicture, UtilsStudentTesting_1.utilsStudentTesting.updateProfilePicture);
let studentData;
beforeEach(async () => {
    const student = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
    studentData = student;
});
afterEach(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("update student", () => {
    // os três testes a seguir o student é dono do email que está tentando utualizar...
    it("it must be possible to update student", async () => {
        await expect(updateStudent.execute(studentData)).resolves.toContainKeys(Object.keys(studentData));
    });
    it("must create a profile picture and update the profile", async () => {
        await expect(updateStudent.execute(studentData, UtilsStudentTesting_1.utilsStudentTesting.picture)).resolves.toContainKeys(Object.keys(studentData));
    });
    it("must update profile picture and update profile", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.createProfilePictureData(studentData.id);
        await expect(updateStudent.execute(studentData, await UtilsStudentTesting_1.utilsStudentTesting.getProfilePictureCreated(studentData.id))).resolves.toContainKeys(Object.keys(studentData));
    });
    /* ************************************************* */
    // os três testes a seguir o student não é dono do email que está tentando utualizar...
    it("it must be possible to update student", async () => {
        studentData.email = "another_email@gmail.com";
        await expect(updateStudent.execute(studentData)).resolves.toHaveProperty("id");
    });
    it("must create a profile picture and update the profile", async () => {
        studentData.email = "another_email@gmail.com";
        await expect(updateStudent.execute(studentData, UtilsStudentTesting_1.utilsStudentTesting.picture)).resolves.toContainKeys(Object.keys(studentData));
    });
    it("must update profile picture and update profile", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.createProfilePictureData(studentData.id);
        studentData.email = "another_email@gmail.com";
        await expect(updateStudent.execute(studentData, await UtilsStudentTesting_1.utilsStudentTesting.getProfilePictureCreated(studentData.id))).resolves.toContainKeys(Object.keys(studentData));
    });
    /* ********************************************************** */
    it("should return the error 'E-mail already exists'", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.createStudentData({
            email: "another@gmail.com",
            name: "Jubiscleiton",
            last_name: "Leia",
        });
        studentData.email = "another@gmail.com";
        await expect(updateStudent.execute(studentData, UtilsStudentTesting_1.utilsStudentTesting.picture)).rejects.toThrow("E-mail already exists");
    });
    it("must return 'Non-existent user' error, because there is no user.", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
        await expect(updateStudent.execute(studentData)).rejects.toThrow("Non-existent user");
    });
});
//# sourceMappingURL=UpdateStudent.test.js.map