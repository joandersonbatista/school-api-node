"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const CreateStudent_1 = require("./CreateStudent");
// sut
const createStudent = new CreateStudent_1.CreateStudent(UtilsStudentTesting_1.utilsStudentTesting.getRepository(), UtilsStudentTesting_1.utilsStudentTesting.studentCreateValidations);
const studentData = UtilsStudentTesting_1.utilsStudentTesting.data;
const expectContainKeys = [
    "id",
    "name",
    "last_name",
    "email",
    "age",
    "weight",
    "height",
    "created_at",
    "updated_at",
    "profile_picture",
];
afterAll(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("create student", () => {
    it("it must be possible to create user", async () => {
        await expect(createStudent.execute(studentData)).resolves.toContainKeys(expectContainKeys);
    });
    it("should return error E-mail already exists", async () => {
        await expect(createStudent.execute(studentData)).rejects.toThrow("E-mail already exists");
    });
});
//# sourceMappingURL=CreateStudent.test.js.map