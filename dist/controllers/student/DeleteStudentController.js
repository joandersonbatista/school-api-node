"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStudentController = void 0;
class DeleteStudentController {
    deleteStudent;
    constructor(deleteStudent) {
        this.deleteStudent = deleteStudent;
    }
    async delete(req, res) {
        const deleteStudent = { student_id: req.params.id };
        try {
            await this.deleteStudent.execute(deleteStudent);
            return res.status(200).send();
        }
        catch (error) {
            if (error instanceof Error)
                return res.status(400).json({ message: error.message });
            return res.status(400).json({ message: "Unexpected error." });
        }
    }
}
exports.DeleteStudentController = DeleteStudentController;
//# sourceMappingURL=DeleteStudentController.js.map