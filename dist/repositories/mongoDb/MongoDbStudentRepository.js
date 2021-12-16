"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbStudentRepository = void 0;
const MongoDbStudent_1 = require("../../models/mongoDb/MongoDbStudent");
class MongoDbStudentRepository {
    async save(student) {
        return await MongoDbStudent_1.MongoDbStudents.create(student);
    }
    async update(student, id) {
        const studentUpdate = await MongoDbStudent_1.MongoDbStudents.updateOne({ id }, student).findOne({ id });
        return studentUpdate;
    }
    async existsEmail(email) {
        return await MongoDbStudent_1.MongoDbStudents.findOne({ email });
    }
    async delete(id) {
        await MongoDbStudent_1.MongoDbStudents.deleteOne({ id });
    }
    async existsId(id) {
        const student = await MongoDbStudent_1.MongoDbStudents.findOne({ id });
        if (student === null)
            return null;
        return student;
    }
    async read(id) {
        if (id === undefined) {
            const findStudents = await MongoDbStudent_1.MongoDbStudents.find().populate("profile_picture");
            const allStudents = [];
            findStudents.forEach((value) => {
                allStudents.push(value);
            });
            return allStudents;
        }
        const student = await MongoDbStudent_1.MongoDbStudents.findOne({ id }).populate("profile_picture");
        return new Array(student);
    }
}
exports.MongoDbStudentRepository = MongoDbStudentRepository;
//# sourceMappingURL=MongoDbStudentRepository.js.map