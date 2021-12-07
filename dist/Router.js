"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const createStudent_1 = require("./useCases/students/createStudent");
const createUser_1 = require("./useCases/users/createUser");
const deleteStudent_1 = require("./useCases/students/deleteStudent");
const deleteUser_1 = require("./useCases/users/deleteUser");
const readStudent_1 = require("./useCases/students/readStudent");
const readUser_1 = require("./useCases/users/readUser");
const signin_1 = require("./useCases/users/signin");
const UpdateStudent_1 = require("./useCases/students/UpdateStudent");
const updateUser_1 = require("./useCases/users/updateUser");
const loginRequired_1 = require("./useCases/users/loginRequired");
class Router {
    app;
    constructor(app) {
        this.app = app;
        this.routes();
    }
    routes() {
        // register
        this.app.post("/register", (request, response) => {
            return createUser_1.createUserController.create(request, response);
        });
        //SignIn
        this.app.post("/signin", (request, response) => {
            return signin_1.signInController.token(request, response);
        });
        //User
        this.app.get("/user", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            readUser_1.readUserController.readOne(request, response);
        });
        this.app.delete("/user", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            return deleteUser_1.deleteUserController.delete(request, response);
        });
        this.app.put("/user", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            return updateUser_1.updateUserController.update(request, response);
        });
        //Student
        this.app.post("/student", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            createStudent_1.createStudentController.create(request, response);
        });
        this.app.get("/student/:id", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            readStudent_1.readStudentController.read(request, response);
        });
        this.app.get("/student", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            readStudent_1.readStudentController.read(request, response);
        });
        this.app.put("/student/:id", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            UpdateStudent_1.updateStudentController.update(request, response);
        });
        this.app.delete("/student/:id", (req, res, next) => {
            loginRequired_1.loginRequiredMiddleware.tokenRequired(req, res, next);
        }, (request, response) => {
            deleteStudent_1.deleteStudentController.delete(request, response);
        });
    }
}
exports.Router = Router;
//# sourceMappingURL=Router.js.map