import { model, Schema } from "mongoose";

import { IStudentsAttributes } from "../IStudentsAttributes";
import { MongoDbProfilePicture } from "./MongoDbProfilePictures";

const schema = new Schema<IStudentsAttributes>(
  {
    name: { type: "string", required: true },
    last_name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    age: { type: "number", required: false, default: null },
    weight: { type: "number", required: false, default: null },
    height: { type: "number", required: false, default: null },
    profile_picture: {
      type: Schema.Types.ObjectId,
      ref: "profile_pictures",
      default: null,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

schema.pre("deleteOne", async function (next) {
  const student = await this.model.findOne(this.getQuery());
  await MongoDbProfilePicture.deleteOne({ student_id: student.id });

  next();
});

const MongoDbStudents = model<IStudentsAttributes>("students", schema);

export { MongoDbStudents };
