"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbProfilePicture = void 0;
const mongoose_1 = require("mongoose");
const MongoDbStudent_1 = require("./MongoDbStudent");
const schema = new mongoose_1.Schema({
    fieldname: { type: "string", required: true },
    originalname: { type: "string", required: true },
    mimetype: { type: "string", required: true },
    filename: { type: "string", required: true },
    url: { type: "string", required: true },
    student_id: { type: mongoose_1.Schema.Types.ObjectId, ref: "students" },
    size: { type: "number", required: true },
}, {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
});
schema.post("save", async (doc) => {
    await MongoDbStudent_1.MongoDbStudents.findOneAndUpdate({ id: doc.student_id }, { profile_picture: doc.id });
});
const MongoDbProfilePicture = (0, mongoose_1.model)("profile_pictures", schema);
exports.MongoDbProfilePicture = MongoDbProfilePicture;
//# sourceMappingURL=MongoDbProfilePictures.js.map