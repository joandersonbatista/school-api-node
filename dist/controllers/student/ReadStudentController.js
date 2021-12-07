"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadStudentController = void 0;
class ReadStudentController {
    readStudent;
    constructor(readStudent) {
        this.readStudent = readStudent;
    }
    async read(req, res) {
        const student = {
            id: parseFloat(req.params.id) || undefined,
        };
        try {
            const students = await this.readStudent.execute(student);
            return res.status(200).send(students);
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.ReadStudentController = ReadStudentController;
//# sourceMappingURL=ReadStudentController.js.map