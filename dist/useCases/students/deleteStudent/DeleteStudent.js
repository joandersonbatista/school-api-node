"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudent = void 0;
class DeleteStudent {
    studentRepository;
    deleteProfilePicture;
    constructor(studentRepository, deleteProfilePicture) {
        this.studentRepository = studentRepository;
        this.deleteProfilePicture = deleteProfilePicture;
    }
    async execute(student) {
        const existsId = await this.studentRepository.existsId(student.student_id);
        if (existsId === null) {
            throw new Error("non-existent user");
        }
        await this.deleteProfilePicture.execute(student);
        await this.studentRepository.delete(student.student_id);
    }
}
exports.DeleteStudent = DeleteStudent;
//# sourceMappingURL=DeleteStudent.js.map