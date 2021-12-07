"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3StorageServiceProfilePicture = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const fs_1 = __importDefault(require("fs"));
const mime_1 = __importDefault(require("mime"));
const path_1 = __importDefault(require("path"));
const multer_1 = require("../../config/multer");
class S3StorageServiceProfilePicture {
    client;
    constructor() {
        this.client = new aws_sdk_1.default.S3({ region: "sa-east-1" });
    }
    async saveFile(fileName) {
        const originalPath = path_1.default.resolve(multer_1.multerConfig.dest, fileName);
        const contentType = mime_1.default.getType(originalPath);
        if (contentType === null)
            throw new Error("File not found");
        const fileContent = await fs_1.default.promises.readFile(originalPath);
        await this.client
            .upload({
            Bucket: "student-profile-picture",
            Key: fileName,
            ACL: "public-read",
            Body: fileContent,
            ContentType: contentType,
        })
            .promise();
        await fs_1.default.promises.unlink(originalPath);
    }
    async deleteFile(fileName) {
        await this.client
            .deleteObject({
            Bucket: 'student-profile-picture',
            Key: fileName,
        })
            .promise();
    }
    getUrl(fileName) {
        const params = { Bucket: "student-profile-picture", Key: fileName };
        const [url] = this.client.getSignedUrl("getObject", params).split("?");
        return url;
    }
}
exports.S3StorageServiceProfilePicture = S3StorageServiceProfilePicture;
//# sourceMappingURL=S3StorageServiceProfilePicture.js.map