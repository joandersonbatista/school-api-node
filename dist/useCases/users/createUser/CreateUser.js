"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUser = void 0;
class CreateUser {
    createUserRepository;
    userCreateValidations;
    constructor(createUserRepository, userCreateValidations) {
        this.createUserRepository = createUserRepository;
        this.userCreateValidations = userCreateValidations;
    }
    async execute(user) {
        this.userCreateValidations.validationEmail(user);
        this.userCreateValidations.validationName(user);
        this.userCreateValidations.validationPassword(user);
        const existsEmail = await this.createUserRepository.existsEmail(user.email);
        if (existsEmail !== null) {
            throw new Error("E-mail already exists");
        }
        await this.createUserRepository.save(user);
    }
}
exports.CreateUser = CreateUser;
//# sourceMappingURL=CreateUser.js.map