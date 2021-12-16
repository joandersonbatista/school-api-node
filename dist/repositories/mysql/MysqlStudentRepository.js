"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlStudentRepository = void 0;
const StudentsModel_1 = require("../../models/mysql/StudentsModel");
class MysqlStudentRepository {
    async save(student) {
        await StudentsModel_1.Student.create(student);
        const studentCreated = await StudentsModel_1.Student.findOne({
            where: { email: student.email },
            include: { association: "profile_picture" },
        });
        return studentCreated.get();
    }
    async existsEmail(email) {
        const existsEmail = await StudentsModel_1.Student.findOne({
            where: { email: email },
        });
        if (existsEmail === null)
            return null;
        return existsEmail.get();
    }
    async delete(id) {
        await StudentsModel_1.Student.destroy({ where: { id } });
    }
    async existsId(id) {
        const existsId = await StudentsModel_1.Student.findOne({ where: { id } });
        if (existsId === null)
            return null;
        return existsId.get();
    }
    async read(id) {
        if (id === undefined) {
            const findStudents = await StudentsModel_1.Student.findAll({
                include: { association: "profile_picture" },
            });
            const allStudents = [];
            findStudents.forEach((value) => {
                allStudents.push(value.get());
            });
            return allStudents;
        }
        const studentId = await StudentsModel_1.Student.findOne({
            where: { id },
            include: { association: "profile_picture" },
        });
        return new Array(studentId.get());
    }
    async update(student, id) {
        await StudentsModel_1.Student.update(student, { where: { id } });
        const studentCreated = await StudentsModel_1.Student.findOne({
            where: { id },
            include: { association: "profile_picture" },
        });
        return studentCreated.get();
    }
}
exports.MysqlStudentRepository = MysqlStudentRepository;
//# sourceMappingURL=MysqlStudentRepository.js.map