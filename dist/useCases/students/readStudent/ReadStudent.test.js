"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UtilsStudentTesting_1 = require("../../../utils/UtilsStudentTesting");
const ReadStudent_1 = require("./ReadStudent");
const readStudent = new ReadStudent_1.ReadStudent(UtilsStudentTesting_1.utilsStudentTesting.getRepository());
let studentData;
beforeAll(async () => {
    const { id } = new Array(await UtilsStudentTesting_1.utilsStudentTesting.createStudentData())[0];
    studentData = { id };
});
afterAll(async () => {
    await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
});
describe("read student", () => {
    it("must read only one student", async () => {
        await expect(readStudent.execute(studentData)).resolves.not.toThrow();
        await expect(readStudent.execute(studentData)).resolves.toBeArray();
    });
    it("must read all students beacause id is undefined", async () => {
        await expect(readStudent.execute()).resolves.toBeArray();
    });
    it("must return 'Non-existent student'", async () => {
        await UtilsStudentTesting_1.utilsStudentTesting.deleteStudentData();
        await expect(readStudent.execute(studentData)).rejects.toThrow("Non-existent student");
    });
});
//# sourceMappingURL=ReadStudent.test.js.map