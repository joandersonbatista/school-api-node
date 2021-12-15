import { UpdateStudent } from "./UpdateStudent";
import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { IUpdateStudentDTO } from "./IUpdateStudentDTO";

const updateStudent = new UpdateStudent(
  utilsStudentTesting.getRepository(),
  utilsStudentTesting.studentUpdateValidations,
  utilsStudentTesting.createProfilePicture,
  utilsStudentTesting.updateProfilePicture,
);

let studentData: IUpdateStudentDTO;

// spy methods
const methodExistEmail = jest.spyOn(
  utilsStudentTesting.getRepository(),
  "existsEmail",
);
const methodExistId = jest.spyOn(
  utilsStudentTesting.getRepository(),
  "existsId",
);
const methodUpdate = jest.spyOn(utilsStudentTesting.getRepository(), "update");
const methodRead = jest.spyOn(utilsStudentTesting.getRepository(), "read");
const methodCreatePicture = jest.spyOn(
  utilsStudentTesting.createProfilePicture,
  "create",
);
const methodUpdatePicture = jest.spyOn(
  utilsStudentTesting.updateProfilePicture,
  "execute",
);
const methodValidationEmail = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "emailValidation",
);
const methodValidationName = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "nameValidation",
);
const methodValidationLastName = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "lastNameValidation",
);
const methodValidationAge = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "ageValidation",
);
const methodValidationHeight = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "heightValidation",
);
const methodValidationWeight = jest.spyOn(
  utilsStudentTesting.studentUpdateValidations,
  "weightValidation",
);

beforeAll(async () => {
  const student = await utilsStudentTesting.createStudentData();
  studentData = student as IUpdateStudentDTO;
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("update student", () => {
  // os três testes a seguir o student é dono do email que está tentando utualizar...
  it("it must be possible to update student", async () => {
    await expect(updateStudent.execute(studentData)).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(1);
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });

  it("must create a profile picture and update the profile", async () => {
    await expect(
      updateStudent.execute(studentData, utilsStudentTesting.picture),
    ).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(1);
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(1);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });

  it("must update profile picture and update profile", async () => {
    await expect(
      updateStudent.execute(
        studentData,
        await utilsStudentTesting.getProfilePictureCreated(studentData.id),
      ),
    ).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(1);
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(1);

    await utilsStudentTesting.deleteStudentData();
  });

  /* ************************************************* */

  // os três testes a seguir o student não é dono do email que está tentando utualizar...
  it("it must be possible to update student", async () => {
    studentData = await utilsStudentTesting.createStudentData() as IUpdateStudentDTO;

    studentData.email = "another_email@gmail.com";
    await expect(updateStudent.execute(studentData)).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(2); // o sut(studentUpdate) executa o 'methodExistsEmail' apenas uma vez quem executa a segunda é a "utilsStudentTesting.createStudentData()" na linha 127.
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });

  it("must create a profile picture and update the profile", async () => {
    await expect(
      updateStudent.execute(studentData, utilsStudentTesting.picture),
    ).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalled();
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(1);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });

  it("must update profile picture and update profile", async () => {
    await expect(
      updateStudent.execute(
        studentData,
        await utilsStudentTesting.getProfilePictureCreated(studentData.id),
      ),
    ).resolves.not.toThrow();
    expect(methodExistEmail).toHaveBeenCalledTimes(1);
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(1);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(1);
  });

  /* ********************************************************** */

  it("should return the error 'E-mail already exists'", async () => {
    await utilsStudentTesting.createStudentData({
      email: "another@gmail.com",
      name: "Jubiscleiton",
      last_name: "Leia",
    });
    studentData.email = "another@gmail.com";
    await expect(
      updateStudent.execute(studentData, utilsStudentTesting.picture),
    ).rejects.toThrow("E-mail already exists");
    expect(methodExistEmail).toHaveBeenCalledTimes(2);
    // o sut(studentUpdate) executa o 'methodExistsEmail' apenas uma vez quem executa a segunda é a "utilsStudentTesting.createStudentData()" na linha 184.
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodRead).toHaveBeenCalledTimes(1);
    expect(methodUpdate).toHaveBeenCalledTimes(0);
    expect(methodValidationEmail).toHaveBeenCalledTimes(1);
    expect(methodValidationName).toHaveBeenCalledTimes(1);
    expect(methodValidationLastName).toHaveBeenCalledTimes(1);
    expect(methodValidationAge).toHaveBeenCalledTimes(1);
    expect(methodValidationHeight).toHaveBeenCalledTimes(1);
    expect(methodValidationWeight).toHaveBeenCalledTimes(1);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });

  it("must return 'Non-existent user' error, because there is no user.", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(updateStudent.execute(studentData)).rejects.toThrow(
      "Non-existent user",
    );
    expect(methodExistId).toHaveBeenCalledTimes(1);
    expect(methodExistEmail).toHaveBeenCalledTimes(0);
    expect(methodRead).toHaveBeenCalledTimes(0);
    expect(methodUpdate).toHaveBeenCalledTimes(0);
    expect(methodValidationEmail).toHaveBeenCalledTimes(0);
    expect(methodValidationName).toHaveBeenCalledTimes(0);
    expect(methodValidationLastName).toHaveBeenCalledTimes(0);
    expect(methodValidationAge).toHaveBeenCalledTimes(0);
    expect(methodValidationHeight).toHaveBeenCalledTimes(0);
    expect(methodValidationWeight).toHaveBeenCalledTimes(0);
    expect(methodCreatePicture).toHaveBeenCalledTimes(0);
    expect(methodUpdatePicture).toHaveBeenCalledTimes(0);
  });
});
