import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { DeleteStudent } from "./DeleteStudent";
import { IDeleteStudentDTO } from "./DeleteStudentDTO";

const deleteStudent = new DeleteStudent(
  utilsStudentTesting.getRepository(),
  utilsStudentTesting.deleteProfilePicture,
);
let studentData: IDeleteStudentDTO;

// spy methods
const methodExistId = jest.spyOn(
  utilsStudentTesting.getRepository(),
  "existsId",
);
const methodDelete = jest.spyOn(utilsStudentTesting.getRepository(), "delete");
const methodDeleteProfilePicture = jest.spyOn(
  utilsStudentTesting.deleteProfilePicture,
  "execute",
);

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
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodDeleteProfilePicture).toHaveBeenCalledTimes(1);
    expect(methodDelete).toHaveBeenCalledTimes(1);
  });

  it("must return 'non-existent user' error", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(deleteStudent.execute(studentData)).rejects.toThrow(
      "non-existent user",
    );
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodDeleteProfilePicture).toHaveBeenCalledTimes(0);
    expect(methodDelete).toHaveBeenCalledTimes(0);
  });
});
