"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudent = void 0;
class UpdateStudent {
    updateStudentRepository;
    studentUpdateValidations;
    createProfilePicture;
    updateProfilePicture;
    constructor(updateStudentRepository, studentUpdateValidations, createProfilePicture, updateProfilePicture) {
        this.updateStudentRepository = updateStudentRepository;
        this.studentUpdateValidations = studentUpdateValidations;
        this.createProfilePicture = createProfilePicture;
        this.updateProfilePicture = updateProfilePicture;
    }
    async execute(student, picture) {
        if (isNaN(student.id)) {
            throw new Error("Invalid id");
        }
        const existsId = await this.updateStudentRepository.existsId(student.id);
        if (existsId === null) {
            throw new Error("Non-existent user");
        }
        this.studentUpdateValidations.emailValidation(student);
        this.studentUpdateValidations.nameValidation(student);
        this.studentUpdateValidations.lastNameValidation(student);
        this.studentUpdateValidations.ageValidation(student);
        this.studentUpdateValidations.heightValidation(student);
        this.studentUpdateValidations.weightValidation(student);
        const existsEmail = await this.updateStudentRepository.existsEmail(student.email || "");
        const [studentHaveProfilePicture] = await this.updateStudentRepository.read(student.id);
        if (existsEmail !== null && existsEmail.id === student.id) {
            if (picture === undefined) {
                await this.updateStudentRepository.update(student, student.id);
                return;
            }
            if (studentHaveProfilePicture.profile_picture === null) {
                await this.createProfilePicture.create(picture, student.id);
                await this.updateStudentRepository.update(student, student.id);
                return;
            }
            await this.updateProfilePicture.execute(picture, student.id);
            await this.updateStudentRepository.update(student, student.id);
            return;
        }
        if (existsEmail === null) {
            if (picture === undefined) {
                await this.updateStudentRepository.update(student, student.id);
                return;
            }
            if (studentHaveProfilePicture.profile_picture === null) {
                await this.createProfilePicture.create(picture, student.id);
                await this.updateStudentRepository.update(student, student.id);
                return;
            }
            await this.updateProfilePicture.execute(picture, student.id);
            await this.updateStudentRepository.update(student, student.id);
            return;
        }
        throw new Error("E-mail already exists");
    }
}
exports.UpdateStudent = UpdateStudent;
//# sourceMappingURL=UpdateStudent.js.map