import { Application } from "express";

import { IRoutesProtocol } from "./IRoutesProtocol";

import { createStudentController } from "./useCases/students/createStudent";
import { createUserController } from "./useCases/users/createUser";
import { deleteStudentController } from "./useCases/students/deleteStudent";
import { deleteUserController } from "./useCases/users/deleteUser";
import { readStudentController } from "./useCases/students/readStudent";
import { readUserController } from "./useCases/users/readUser";
import { signInController } from "./useCases/users/signin";
import { updateStudentController } from "./useCases/students/UpdateStudent";
import { updateUserController } from "./useCases/users/updateUser";

import { loginRequiredMiddleware } from "./useCases/users/loginRequired";

class Router implements IRoutesProtocol {
  constructor(public app: Application) {
    this.routes();
  }

  routes(): void {
    // register
    this.app.post("/register", (request, response) => {
      return createUserController.create(request, response);
    });

    //SignIn
    this.app.post("/signin", (request, response) => {
      return signInController.token(request, response);
    });

    //User
    this.app.get(
      "/user",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        readUserController.readOne(request, response);
      },
    );

    this.app.delete(
      "/user",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        return deleteUserController.delete(request, response);
      },
    );

    this.app.put(
      "/user",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        return updateUserController.update(request, response);
      },
    );

    //Student
    this.app.post(
      "/student",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        createStudentController.create(request, response);
      },
    );

    this.app.get(
      "/student/:id",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        readStudentController.read(request, response);
      },
    );

    this.app.get(
      "/student",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        readStudentController.read(request, response);
      },
    );

    this.app.put(
      "/student/:id",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        updateStudentController.update(request, response);
      },
    );

    this.app.delete(
      "/student/:id",
      (req, res, next) => {
        loginRequiredMiddleware.tokenRequired(req, res, next);
      },
      (request, response) => {
        deleteStudentController.delete(request, response);
      },
    );
  }
}

export { Router };
