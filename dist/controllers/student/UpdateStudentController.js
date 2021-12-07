"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentController = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("../../config/multer");
class UpdateStudentController {
    updateStudent;
    _multer = (0, multer_1.default)(multer_2.multerConfig);
    constructor(updateStudent) {
        this.updateStudent = updateStudent;
    }
    async update(req, res) {
        const uploadPhoto = this._multer.single("photo");
        return uploadPhoto(req, res, async (error) => {
            if (error)
                return res.status(400).json({ message: error.field });
            const student = JSON.parse(JSON.stringify(req.body));
            console.log(req.body);
            student.id = parseFloat(req.params.id);
            try {
                if (req.file === undefined) {
                    await this.updateStudent.execute(student, req.file);
                    return res.status(201).send();
                }
                await this.updateStudent.execute(student, req.file);
                return res.status(201).send();
            }
            catch (error) {
                if (error instanceof Error)
                    return res.status(400).json({ message: error.message });
                return res.status(400).json({ message: "Unexpected error." });
            }
        });
        const id = req.params.id;
    }
}
exports.UpdateStudentController = UpdateStudentController;
//# sourceMappingURL=UpdateStudentController.js.map