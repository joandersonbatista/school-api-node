import { IUsersAttributes } from "../models/IUserAttributes";
import { MongoDbUser } from "../models/mongoDb/MongoDbUser";
import { User } from "../models/mysql/UserModel";
import { IUserRepository } from "../repositories/IUserRepository";
import { CreateUser } from "../useCases/users/createUser/CreateUser";
import { UserCreateValidantion } from "../useCases/users/createUser/validations/UserCreateValidations";
import { ValidationsUserUpdate } from "../useCases/users/updateUser/validations/ValidationsUserUpdate";
import { IUserLogin } from "../useCases/users/signin/ISignIn";
import { SignIn } from "../useCases/users/signin/SignIn";
import { ICreateUserDTO } from "../useCases/users/createUser/ICreateUserDTO";
import { userRepository } from "./chooseApplicationDatabase";

class UtilsUserTesting {
  constructor(
    public userCreateValidations = new UserCreateValidantion(),
    public userUpdateValidations = new ValidationsUserUpdate(),
    public signIn = new SignIn(userRepository()),
    public data = {
      email: "jubiscleiton@gmail.com",
      name: "Jubis",
      password: "123456",
    },
    public createUser = new CreateUser(
      userRepository(),
      userCreateValidations,
    ),
  ) {}

  async createData(anotherUser?: ICreateUserDTO): Promise<IUsersAttributes> {
    if (anotherUser !== undefined) {
      anotherUser.password = "123456";
      return await this.createUser.execute(anotherUser);
    }
    this.data.password = "123456";
    return await this.createUser.execute(this.data);
  }

  async deleteData(): Promise<void> {
    await MongoDbUser.deleteMany({});
    await User.destroy({ where: {}, truncate: true });
  }

  async signInUser(): Promise<IUserLogin> {
    return await this.signIn.execute({
      email: "jubiscleiton@gmail.com",
      password: "123456",
    });
  }

  getRepository(): IUserRepository {
    return userRepository();
  }
}

const utilsUserTesting = new UtilsUserTesting();

export { utilsUserTesting };
