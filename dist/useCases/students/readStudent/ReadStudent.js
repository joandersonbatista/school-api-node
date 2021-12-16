"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadStudent = void 0;
class ReadStudent {
    studentRepository;
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute(student) {
        if (student === undefined) {
            return this.studentRepository.read();
        }
        const existsId = await this.studentRepository.existsId(student.id);
        if (existsId === null) {
            throw new Error("Non-existent student");
        }
        return await this.studentRepository.read(student.id);
    }
}
exports.ReadStudent = ReadStudent;
//# sourceMappingURL=ReadStudent.js.map