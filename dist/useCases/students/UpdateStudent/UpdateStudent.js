"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudent = void 0;
class UpdateStudent {
    studentRepository;
    studentUpdateValidations;
    createProfilePicture;
    updateProfilePicture;
    constructor(studentRepository, studentUpdateValidations, createProfilePicture, updateProfilePicture) {
        this.studentRepository = studentRepository;
        this.studentUpdateValidations = studentUpdateValidations;
        this.createProfilePicture = createProfilePicture;
        this.updateProfilePicture = updateProfilePicture;
    }
    async execute(student, picture) {
        const existsId = await this.studentRepository.existsId(student.id);
        if (existsId === null) {
            throw new Error("Non-existent user");
        }
        this.studentUpdateValidations.emailValidation(student);
        this.studentUpdateValidations.nameValidation(student);
        this.studentUpdateValidations.lastNameValidation(student);
        this.studentUpdateValidations.ageValidation(student);
        this.studentUpdateValidations.heightValidation(student);
        this.studentUpdateValidations.weightValidation(student);
        const existsEmail = await this.studentRepository.existsEmail(student.email || "");
        const [studentHaveProfilePicture] = await this.studentRepository.read(student.id);
        if (existsEmail !== null && existsEmail.id === student.id) {
            if (picture === undefined) {
                return await this.studentRepository.update(student, student.id);
            }
            if (studentHaveProfilePicture.profile_picture === null) {
                await this.createProfilePicture.create(picture, student.id);
                return await this.studentRepository.update(student, student.id);
            }
            await this.updateProfilePicture.execute(picture, student.id);
            return await this.studentRepository.update(student, student.id);
        }
        if (existsEmail === null) {
            if (picture === undefined) {
                return await this.studentRepository.update(student, student.id);
            }
            if (studentHaveProfilePicture.profile_picture === null) {
                await this.createProfilePicture.create(picture, student.id);
                return await this.studentRepository.update(student, student.id);
            }
            await this.updateProfilePicture.execute(picture, student.id);
            return await this.studentRepository.update(student, student.id);
        }
        throw new Error("E-mail already exists");
    }
}
exports.UpdateStudent = UpdateStudent;
//# sourceMappingURL=UpdateStudent.js.map