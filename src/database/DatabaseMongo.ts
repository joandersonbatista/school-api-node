import mongoose, { Mongoose } from "mongoose";
import { IConnectionDbProtocol } from "./IConnectionDbProtocol";

class ConnectionMongoDB implements IConnectionDbProtocol {
  private connection!: Mongoose;

  constructor() {
    this.connectDB();
  }

  async connectDB(): Promise<void> {
    this.connection = await mongoose.connect(
      process.env.DATABASE_HOST_MONGODB!,
    );
  }
}

const connectionMongoDB = new ConnectionMongoDB();

export { connectionMongoDB };
