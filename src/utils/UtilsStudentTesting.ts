import { connectionMongoDB } from "../database/ConnectionMongoDB";
import { IStudentsAttributes } from "../models/IStudentsAttributes";
import { MongoDbStudents } from "../models/mongoDb/MongoDbStudent";
import { IStudentRepository } from "../repositories/IstudentRepository";
import { MongoDbStudentRepository } from "../repositories/mongoDb/MongoDbStudentRepository";
// import { MysqlStudentRepository } from "../repositories/mysql/MysqlStudentRepository";
import { CreateStudent } from "../useCases/students/createStudent/CreateStudent";
import { ICreateStudent } from "../useCases/students/createStudent/ICreateStudent";
import { ICreateStudentDTO } from "../useCases/students/createStudent/ICreateStudentDTO";
import { IStudentCreateValidations } from "../useCases/students/createStudent/validations/IStudentCreateValidations";
import { StudentCreateValidation } from "../useCases/students/createStudent/validations/StudentCreateValidations";

connectionMongoDB;
const userRepositoryMongoDb = new MongoDbStudentRepository();
// const userRepositoryMySQL = new MysqlStudentRepository();

function returnRepository(): IStudentRepository {
  return userRepositoryMongoDb;
}

class UtilsStudentTesting {
  public data: ICreateStudentDTO = {
    email: "jubileu@gmail.com",
    name: "Jubis",
    last_name: "Leu",
    age: 20,
    height: 1.88,
    weight: 77.80
  };
  public studentCreateValidations: IStudentCreateValidations =
    new StudentCreateValidation();
  public createStudent: ICreateStudent = new CreateStudent(
    returnRepository(),
    this.studentCreateValidations,
  );

  async createData(
    anotherStudent?: ICreateStudentDTO,
  ): Promise<IStudentsAttributes> {
    if (anotherStudent) {
      return await this.createStudent.execute(anotherStudent);
    }
    return await this.createStudent.execute(this.data);
  }

  async deleteData(): Promise<void> {
    await MongoDbStudents.deleteMany({});
    // await Student.destroy({ where: {}, truncate: true });
  }

  getRepository(): IStudentRepository {
    return returnRepository();
  }
}

const utilsStudentTesting = new UtilsStudentTesting();

export { utilsStudentTesting };
