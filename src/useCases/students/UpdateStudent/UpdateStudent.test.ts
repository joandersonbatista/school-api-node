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

beforeEach(async () => {
  const student = await utilsStudentTesting.createStudentData();
  studentData = student as IUpdateStudentDTO;
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("update student", () => {
  // os três testes a seguir o student é dono do email que está tentando utualizar...
  it("it must be possible to update student", async () => {
    await expect(updateStudent.execute(studentData)).resolves.toContainKeys(
      Object.keys(studentData),
    );
  });

  it("must create a profile picture and update the profile", async () => {
    await expect(
      updateStudent.execute(studentData, utilsStudentTesting.picture),
    ).resolves.toContainKeys(Object.keys(studentData));
  });

  it("must update profile picture and update profile", async () => {
    await utilsStudentTesting.createProfilePictureData(studentData.id);
    await expect(
      updateStudent.execute(
        studentData,
        await utilsStudentTesting.getProfilePictureCreated(studentData.id),
      ),
    ).resolves.toContainKeys(Object.keys(studentData));
  });

  /* ************************************************* */

  // os três testes a seguir o student não é dono do email que está tentando utualizar...
  it("it must be possible to update student", async () => {
    studentData.email = "another_email@gmail.com";
    await expect(updateStudent.execute(studentData)).resolves.toHaveProperty(
      "id",
    );
  });

  it("must create a profile picture and update the profile", async () => {
    studentData.email = "another_email@gmail.com";

    await expect(
      updateStudent.execute(studentData, utilsStudentTesting.picture),
    ).resolves.toContainKeys(Object.keys(studentData));
  });

  it("must update profile picture and update profile", async () => {
    await utilsStudentTesting.createProfilePictureData(studentData.id);
    studentData.email = "another_email@gmail.com";

    await expect(
      updateStudent.execute(
        studentData,
        await utilsStudentTesting.getProfilePictureCreated(studentData.id),
      ),
    ).resolves.toContainKeys(Object.keys(studentData));
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
  });

  it("must return 'Non-existent user' error, because there is no user.", async () => {
    await utilsStudentTesting.deleteStudentData();

    await expect(updateStudent.execute(studentData)).rejects.toThrow(
      "Non-existent user",
    );
  });
});
