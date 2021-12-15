import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { IUpdateProfilePictureDTO } from "./IUpdateProfilePictureDTO";
import { UpdateProfilePicture } from "./UpdateProfilePicture";

const updateProfilePicture = new UpdateProfilePicture(
  utilsStudentTesting.profilePictureRepository,
  utilsStudentTesting.storageServiceProfilePicture,
);

let profilePictureData: IUpdateProfilePictureDTO;
let student_id: number | string;

//spy methods
const methodExistsProfilePicture = jest.spyOn(
  utilsStudentTesting.profilePictureRepository,
  "existsProfilePicture",
);
const methodUpdateProfilePicture = jest.spyOn(
  utilsStudentTesting.profilePictureRepository,
  "update",
);
const methodDeleteFile = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "deleteFile",
);
const methodSaveFile = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "saveFile",
);
const methodGetUrl = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "getUrl",
);
const methodObjectAssign = jest.spyOn(Object, "assign");

beforeAll(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  const profilePicture = await utilsStudentTesting.createProfilePictureData(id);
  student_id = id;
  profilePictureData = profilePicture;
});

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("update profile picture", () => {
  it("must be possible update profile picture", async () => {
    await expect(
      updateProfilePicture.execute(profilePictureData, student_id),
    ).resolves.not.toThrow();
    await expect(
      updateProfilePicture.execute(profilePictureData, student_id),
    ).resolves.toBeUndefined();
    expect(methodExistsProfilePicture).toHaveBeenCalledTimes(2);
    expect(methodUpdateProfilePicture).toHaveBeenCalledTimes(2);
    expect(methodDeleteFile).toHaveBeenCalledTimes(2);
    expect(methodSaveFile).toHaveBeenCalledTimes(2);
    expect(methodGetUrl).toHaveBeenCalledTimes(2);
    expect(methodObjectAssign).toHaveBeenCalled();
  });
});
