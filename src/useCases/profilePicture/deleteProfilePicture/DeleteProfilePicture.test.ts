import { utilsStudentTesting } from "../../../utils/UtilsStudentTesting";
import { DeleteProfilePicture } from "./DeleteProfilePicture";
import { IDeleteProfilePictureDTO } from "./IDeleteProfilePictureDTO";

const deleteProfilePicture = new DeleteProfilePicture(
  utilsStudentTesting.getProfilePictureRepository(),
  utilsStudentTesting.storageServiceProfilePicture,
);

let profilePictureData: IDeleteProfilePictureDTO;

// spy methods
const methodExistsProfilePicture = jest.spyOn(
  utilsStudentTesting.profilePictureRepository,
  "existsProfilePicture",
);
const methodDeleteFile = jest.spyOn(
  utilsStudentTesting.storageServiceProfilePicture,
  "deleteFile",
);

beforeAll(async () => {
  const { id } = await utilsStudentTesting.createStudentData();
  profilePictureData = { student_id: id };
  await utilsStudentTesting.createProfilePictureData(id);
});

afterEach(async () => {
  await utilsStudentTesting.deleteStudentData();
});

describe("delete profile picture", () => {
  it("muste be possible delete profile picture", async () => {
    await expect(
      deleteProfilePicture.execute(profilePictureData),
    ).resolves.not.toThrow();
    await utilsStudentTesting.createProfilePictureData(
      profilePictureData.student_id,
    );
    await expect(
      deleteProfilePicture.execute(profilePictureData),
    ).resolves.toBeUndefined();
    expect(methodExistsProfilePicture).toHaveBeenCalledTimes(2);
    expect(methodDeleteFile).toHaveBeenCalledTimes(2);
  });

  it("should return undefined because there is no profile picture", async () => {
    const { id } = await utilsStudentTesting.createStudentData();
    profilePictureData = { student_id: id };

    await expect(
      deleteProfilePicture.execute(profilePictureData),
    ).resolves.toBeUndefined();
    expect(methodExistsProfilePicture).toHaveBeenCalledTimes(1);
    expect(methodDeleteFile).toHaveBeenCalledTimes(0);
  });
});
