import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { IReadStudentDTO } from "./IReadStudentDTO";
import { ReadStudent } from "./ReadStudent";

const readStudent = new ReadStudent(utilsStudentTesting.getRepository());
let studentData: IReadStudentDTO;

beforeAll(async () => {
  const { id } = new Array(await utilsStudentTesting.createStudentData())[0];
  studentData = { id };
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
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
    await utilsStudentTesting.deleteStudentData();

    await expect(readStudent.execute(studentData)).rejects.toThrow(
      "Non-existent student",
    );
  });
});
