"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudent = void 0;
class DeleteStudent {
    deleteStudentRepository;
    deleteProfilePicture;
    constructor(deleteStudentRepository, deleteProfilePicture) {
        this.deleteStudentRepository = deleteStudentRepository;
        this.deleteProfilePicture = deleteProfilePicture;
    }
    async execute(student) {
        if (isNaN(student.student_id)) {
            throw new Error("Invalid id");
        }
        const existsId = await this.deleteStudentRepository.existsId(student.student_id);
        if (existsId === null) {
            throw new Error("non-existent user");
        }
        await this.deleteProfilePicture.execute(student);
        await this.deleteStudentRepository.delete(student.student_id);
    }
}
exports.DeleteStudent = DeleteStudent;
//# sourceMappingURL=DeleteStudent.js.map