"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const DeleteStudent_1 = require("./DeleteStudent");
const deleteStudent = new DeleteStudent_1.DeleteStudent(UtilsStudentTesting_1.utilsStudentTesting.getRepository(), UtilsStudentTesting_1.utilsStudentTesting.deleteProfilePicture);
let studentData;
beforeEach(async () => {
    const { id } = await UtilsStudentTesting_1.utilsStudentTesting.createStudentData();
    studentData = { student_id: id };
});
afterAll(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("delete student", () => {
    it("must be possible delete student", async () => {
        await expect(deleteStudent.execute(studentData)).resolves.not.toThrow();
    });
    it("must return 'non-existent user' error", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
        await expect(deleteStudent.execute(studentData)).rejects.toThrow("non-existent user");
    });
});
//# sourceMappingURL=DeleteStudent.test.js.map