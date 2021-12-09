import { Schema } from "mongoose";
import { ICreateUserAttributes } from "../ICreateUserAttributes";
import { IUsersAttributes } from "../IUserAttributes";

const schema = new Schema<IUsersAttributes>({
  
})

schema.virtual("password", {})

class MongoDbCreateUser {

}