import { model, Schema } from "mongoose";

import { IUsersAttributes } from "../IUserAttributes";

const schema = new Schema<IUsersAttributes>(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true },
    password: { type: "string", required: true },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  },
);

const MongoDbUser = model<IUsersAttributes>("users", schema);

export { MongoDbUser };
