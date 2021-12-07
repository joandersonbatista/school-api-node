import aws, { S3 } from "aws-sdk";
import fs from "fs";
import mime from "mime";
import path from "path";

import { multerConfig } from "../../config/multer";
import { IStorageServiceProfilePicture } from "../IStorageServiceProfilePicture";

class S3StorageServiceProfilePicture implements IStorageServiceProfilePicture {
  private client: S3;

  constructor() {
    this.client = new aws.S3({ region: "sa-east-1" });
  }

  async saveFile(fileName: string): Promise<void> {
    const originalPath = path.resolve(multerConfig.dest!, fileName);

    const contentType = mime.getType(originalPath);

    if (contentType === null) throw new Error("File not found");

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .upload({
        Bucket: "student-profile-picture",
        Key: fileName,
        ACL: "public-read",
        Body: fileContent,
        ContentType: contentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);
  }

  async deleteFile(fileName: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: 'student-profile-picture',
        Key: fileName,
      })
      .promise();
  }

  getUrl(fileName: string): string {
    const params = { Bucket: "student-profile-picture", Key: fileName };
    const [url] = this.client.getSignedUrl("getObject", params).split("?");

    return url;
  }
}

export { S3StorageServiceProfilePicture };
