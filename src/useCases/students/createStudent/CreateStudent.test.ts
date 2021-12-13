import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { CreateStudent } from "./CreateStudent";

// suit
const createStudent = new CreateStudent(
  utilsStudentTesting.getRepository(),
  utilsStudentTesting.studentCreateValidations,
);
const studentData = utilsStudentTesting.data;
// spy methods
const methodExistEmail = jest.spyOn(
  utilsStudentTesting.getRepository(),
  "existsEmail",
);
const methodSave = jest.spyOn(utilsStudentTesting.getRepository(), "save");
const methodValidationEmail = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "emailValidation",
);
const methodValidationName = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "nameValidation",
);
const methodValidationLastName = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "lastNameValidation",
);
const methodValidationAge = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "ageValidation",
);
const methodValidationHeight = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "heightValidation",
);
const methodValidationWeight = jest.spyOn(
  utilsStudentTesting.studentCreateValidations,
  "weightValidation",
);

afterAll(async () => {
  await utilsStudentTesting.deleteData();
});

describe("create student", () => {
  it("it must be possible to create user", async () => {
    await expect(createStudent.execute(studentData)).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(1);
    expect(methodSave).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
  });

  it("should return error E-mail already exists", async () => {
    await expect(
      createStudent.execute(studentData),
    ).rejects.toThrow("E-mail already exists");
  });
});
