"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbStudents = void 0;
const mongoose_1 = require("mongoose");
const MongoDbProfilePictures_1 = require("./MongoDbProfilePictures");
const schema = new mongoose_1.Schema({
    name: { type: "string", required: true },
    last_name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    age: { type: "number", required: false, default: null },
    weight: { type: "number", required: false, default: null },
    height: { type: "number", required: false, default: null },
    profile_picture: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "profile_pictures",
        default: null,
    },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
schema.pre("deleteOne", async function (next) {
    const student = await this.model.findOne(this.getQuery());
    await MongoDbProfilePictures_1.MongoDbProfilePicture.deleteOne({ student_id: student.id });
    next();
});
const MongoDbStudents = (0, mongoose_1.model)("students", schema);
exports.MongoDbStudents = MongoDbStudents;
//# sourceMappingURL=MongoDbStudent.js.map