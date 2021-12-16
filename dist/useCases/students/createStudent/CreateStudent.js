"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudent = void 0;
class CreateStudent {
    studentRepository;
    studentCreateValidations;
    constructor(studentRepository, studentCreateValidations) {
        this.studentRepository = studentRepository;
        this.studentCreateValidations = studentCreateValidations;
    }
    async execute(student) {
        this.studentCreateValidations.emailValidation(student);
        this.studentCreateValidations.nameValidation(student);
        this.studentCreateValidations.lastNameValidation(student);
        this.studentCreateValidations.ageValidation(student);
        this.studentCreateValidations.heightValidation(student);
        this.studentCreateValidations.weightValidation(student);
        const existsEmail = await this.studentRepository.existsEmail(student.email);
        if (existsEmail === null) {
            return await this.studentRepository.save(student);
        }
        throw new Error("E-mail already exists");
    }
}
exports.CreateStudent = CreateStudent;
//# sourceMappingURL=CreateStudent.js.map