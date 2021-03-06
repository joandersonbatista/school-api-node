"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStudentController = void 0;
class CreateStudentController {
    createStudent;
    constructor(createStudent) {
        this.createStudent = createStudent;
    }
    async create(req, res) {
        const student = req.body;
        if (!student.email) {
            return res.status(400).json({
                message: "email is required",
            });
        }
        if (!student.name) {
            return res.status(400).json({
                message: "name is required",
            });
        }
        if (!student.last_name) {
            return res.status(400).json({
                message: "last_name is required",
            });
        }
        try {
            await this.createStudent.execute(student);
            return res.status(201).send();
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.CreateStudentController = CreateStudentController;
//# sourceMappingURL=CreateStudentController.js.map