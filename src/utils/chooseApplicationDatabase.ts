import { connectionMongoDB } from "../database/ConnectionMongoDB";
import { IProfilePictureRepository } from "../repositories/IProfilePictureRepository";
import { IStudentRepository } from "../repositories/IstudentRepository";
import { IUserRepository } from "../repositories/IUserRepository";
import { MongoDbProfilePictureRepository } from "../repositories/mongoDb/MongoDbProfilePictureRepository";
import { MongoDbStudentRepository } from "../repositories/mongoDb/MongoDbStudentRepository";
import { MongoDbUserRepository } from "../repositories/mongoDb/MongoDbUserRepository";
import { MysqlProfilePictureRepository } from "../repositories/mysql/MysqlProfilePictureRepository";
import { MysqlStudentRepository } from "../repositories/mysql/MysqlStudentRepository";
import { MysqlUserRepository } from "../repositories/mysql/MySqlUserRepository";

connectionMongoDB;

const userRepositoryMongoDb = new MongoDbUserRepository();
const studentRepositoryMongoDb = new MongoDbStudentRepository();
const profilePictureRepositoryMongoDb = new MongoDbProfilePictureRepository();

const userRepositoryMySql = new MysqlUserRepository();
const studentRepositoryMySql = new MysqlStudentRepository();
const profilePictureRepositoryMySql = new MysqlProfilePictureRepository();

function userRepository(): IUserRepository {
  // return userRepositoryMongoDb;
  return userRepositoryMySql;
}

function studentRepository(): IStudentRepository {
  //return studentRepositoryMongoDb;
  return studentRepositoryMySql;
}

function profilePictureRepository(): IProfilePictureRepository {
  //return profilePictureRepositoryMongoDb;
  return profilePictureRepositoryMySql;
}

export { profilePictureRepository, userRepository, studentRepository };
