"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.utilsStudentTesting = void 0;
const MongoDbStudent_1 = require("../models/mongoDb/MongoDbStudent");
const MongoDbProfilePictures_1 = require("../models/mongoDb/MongoDbProfilePictures");
const CreateStudent_1 = require("../useCases/students/createStudent/CreateStudent");
const StudentUpdateValidations_1 = require("../useCases/students/UpdateStudent/validations/StudentUpdateValidations");
const StudentCreateValidations_1 = require("../useCases/students/createStudent/validations/StudentCreateValidations");
const CreateProfilePicture_1 = require("../useCases/profilePicture/CreateProfilePicture/CreateProfilePicture");
const S3StorageServiceProfilePicture_1 = require("../providers/implementation/S3StorageServiceProfilePicture");
const UpdateProfilePicture_1 = require("../useCases/profilePicture/updateProfilePicture/UpdateProfilePicture");
const DeleteProfilePicture_1 = require("../useCases/profilePicture/deleteProfilePicture/DeleteProfilePicture");
const chooseApplicationDatabase_1 = require("./chooseApplicationDatabase");
const StudentsModel_1 = require("../models/mysql/StudentsModel");
const ProfilePicture_1 = require("../models/mysql/ProfilePicture");
class UtilsStudentTesting {
    data = {
        email: "jubileu@gmail.com",
        name: "Jubis",
        last_name: "Leu",
        age: 20,
        height: 1.88,
        weight: 77.8,
    };
    studentCreateValidations = new StudentCreateValidations_1.StudentCreateValidation();
    createStudent = new CreateStudent_1.CreateStudent(this.getRepository(), this.studentCreateValidations);
    studentUpdateValidations = new StudentUpdateValidations_1.StudentUpdateValidations();
    storageServiceProfilePicture = new S3StorageServiceProfilePicture_1.S3StorageServiceProfilePicture();
    updateProfilePicture = new UpdateProfilePicture_1.UpdateProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), this.storageServiceProfilePicture);
    createProfilePicture = new CreateProfilePicture_1.CreateProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), this.storageServiceProfilePicture);
    deleteProfilePicture = new DeleteProfilePicture_1.DeleteProfilePicture((0, chooseApplicationDatabase_1.profilePictureRepository)(), this.storageServiceProfilePicture);
    picture = {
        fieldname: "photo",
        originalname: "torres-del-paine-4k_1551644197.jpg",
        encoding: "7bit",
        mimetype: "image/jpeg",
        destination: "/home/prince/Documentos/projetos/school-api-node/uploads",
        filename: "test_picture.jpg",
        path: "/home/prince/Documentos/projetos/school-api-node/uploads/test_picture.jpg",
        size: 966590,
    };
    async createStudentData(anotherStudent) {
        if (anotherStudent) {
            return await this.createStudent.execute(anotherStudent);
        }
        return await this.createStudent.execute(this.data);
    }
    async createProfilePictureData(id) {
        return await this.createProfilePicture.create(this.picture, id);
    }
    async deleteStudentData() {
        await MongoDbStudent_1.MongoDbStudents.deleteMany({});
        await MongoDbProfilePictures_1.MongoDbProfilePicture.deleteMany({});
        await StudentsModel_1.Student.destroy({ where: {} });
        await ProfilePicture_1.ProfilePicture.destroy({ where: {}, truncate: true });
        await this.storageServiceProfilePicture.deleteFile("test_picture.jpg");
    }
    async getProfilePictureCreated(id) {
        return (await (0, chooseApplicationDatabase_1.profilePictureRepository)().existsProfilePicture(id));
    }
    getRepository() {
        return (0, chooseApplicationDatabase_1.studentRepository)();
    }
    getProfilePictureRepository() {
        return (0, chooseApplicationDatabase_1.profilePictureRepository)();
    }
}
const utilsStudentTesting = new UtilsStudentTesting();
exports.utilsStudentTesting = utilsStudentTesting;
//# sourceMappingURL=UtilsStudentTesting.js.map