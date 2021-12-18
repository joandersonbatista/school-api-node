import dotenv from "dotenv";

dotenv.config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

import fs from "fs";

import { S3StorageServiceProfilePicture } from "./S3StorageServiceProfilePicture";

import { utilsStudentTesting } from "../../utils/UtilsStudentTesting";
import { multerConfig } from "../../config/multer";

const s3StorageServiceProfilePicture = new S3StorageServiceProfilePicture();

afterAll(async () => {
  await utilsStudentTesting.deleteStudentData();
  fs.copyFile(
    `${multerConfig.dest}/test_picture.jpg`,
    `${multerConfig.dest}/test_picture_copy.jpg`,
    () => {},
  );
});

describe("S3 profile picture", () => {
  it("must be possible save profile Picture", async () => {
    await expect(
      s3StorageServiceProfilePicture.saveFile("test_picture_copy.jpg"),
    ).resolves.toBeUndefined();
  });

  it("must return 'file not found' error", async () => {
    await expect(
      s3StorageServiceProfilePicture.saveFile("test_picture_not_found"),
    ).rejects.toThrow("File not found");
  });

  it("must be possible delete profile picture", async () => {
    await expect(
      s3StorageServiceProfilePicture.deleteFile("test_picture_copy.jpg"),
    ).resolves.toBeUndefined();
  });

  it("must return url of profile picture", async () => {
    expect(
      s3StorageServiceProfilePicture.getUrl("test_picture_copy.jpg"),
    ).toBeString();
  });
});
