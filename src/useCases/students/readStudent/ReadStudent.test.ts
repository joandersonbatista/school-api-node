import { IStudentsAttributes } from "../../../models/IStudentsAttributes";
import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { IReadStudentDTO } from "./IReadStudentDTO";
import { ReadStudent } from "./ReadStudent";

const readStudent = new ReadStudent(utilsStudentTesting.getRepository());
let studentData: IReadStudentDTO;
let expectReturn: IStudentsAttributes[];

// spy methods
const methodRead = jest.spyOn(utilsStudentTesting.getRepository(), "read");
const methodExistsId = jest.spyOn(
  utilsStudentTesting.getRepository(),
  "existsId",
);

beforeAll(async () => {
  expectReturn = new Array(await utilsStudentTesting.createStudentData());
  studentData = { id: expectReturn[0].id };
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("read student", () => {
  it("must read only one student", async () => {
    await expect(readStudent.execute(studentData)).resolves.not.toThrow();
    expect(methodExistsId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
  });

  it("must read all students beacause id is undefined", async () => {
    await expect(readStudent.execute()).resolves.not.toThrow();
    expect(methodExistsId).toHaveBeenCalledTimes(0);
    expect(methodRead).toHaveBeenCalledTimes(1);
  });

  it("must return 'Non-existent student'", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(readStudent.execute(studentData)).rejects.toThrow(
      "Non-existent student",
    );
    expect(methodExistsId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(0);
  });
});
