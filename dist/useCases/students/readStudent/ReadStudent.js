"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadStudent = void 0;
class ReadStudent {
    readStudentRepository;
    constructor(readStudentRepository) {
        this.readStudentRepository = readStudentRepository;
    }
    async execute(student) {
        if (student.id !== undefined && isNaN(student.id)) {
            throw new Error("Invalid id");
        }
        if (student.id === undefined) {
            return this.readStudentRepository.read();
        }
        const existsId = await this.readStudentRepository.existsId(student.id);
        if (existsId === null) {
            throw new Error("Non-existent student");
        }
        return await this.readStudentRepository.read(student.id);
    }
}
exports.ReadStudent = ReadStudent;
//# sourceMappingURL=ReadStudent.js.map