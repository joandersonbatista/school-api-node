import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { CreateStudent } from "./CreateStudent";

// sut
const createStudent = new CreateStudent(
  utilsStudentTesting.getRepository(),
  utilsStudentTesting.studentCreateValidations,
);
const studentData = utilsStudentTesting.data;
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
  await utilsStudentTesting.deleteStudentData();
});

describe("create student", () => {
  it("it must be possible to create user", async () => {
    await expect(createStudent.execute(studentData)).resolves.toContainKeys(
      expectContainKeys,
    );
  });

  it("should return error E-mail already exists", async () => {
    await expect(createStudent.execute(studentData)).rejects.toThrow(
      "E-mail already exists",
    );
  });
});
