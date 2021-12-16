import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { DeleteStudent } from "./DeleteStudent";
import { IDeleteStudentDTO } from "./DeleteStudentDTO";

const deleteStudent = new DeleteStudent(
  utilsStudentTesting.getRepository(),
  utilsStudentTesting.deleteProfilePicture,
);
let studentData: IDeleteStudentDTO;

beforeEach(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  studentData = { student_id: id };
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("delete student", () => {
  it("must be possible delete student", async () => {
    await expect(deleteStudent.execute(studentData)).resolves.not.toThrow();
  });

  it("must return 'non-existent user' error", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(deleteStudent.execute(studentData)).rejects.toThrow(
      "non-existent user",
    );
  });
});
