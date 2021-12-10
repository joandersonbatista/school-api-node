import { model, Schema } from "mongoose";

import { IProfilePictureAttributes } from "../IProfilePictureAttributes";
import { MongoDbStudents } from "./MongoDbStudent";

const schema = new Schema<IProfilePictureAttributes>(
  {
    fieldname: { type: "string", required: true },
    originalname: { type: "string", required: true },
    mimetype: { type: "string", required: true },
    filename: { type: "string", required: true },
    url: { type: "string", required: true },
    student_id: { type: Schema.Types.ObjectId, ref: "students" },
    size: { type: "number", required: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

schema.post("save", async (doc) => {
  await MongoDbStudents.findOneAndUpdate(
    { id: doc.student_id },
    { profile_picture: doc.id },
  );
});

const MongoDbProfilePicture = model<IProfilePictureAttributes>(
  "profile_pictures",
  schema,
);

export { MongoDbProfilePicture };
