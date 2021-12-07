"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = void 0;
class UpdateUser {
    updateUserRepository;
    validationsUpdateUser;
    constructor(updateUserRepository, validationsUpdateUser) {
        this.updateUserRepository = updateUserRepository;
        this.validationsUpdateUser = validationsUpdateUser;
    }
    async execute(user) {
        const existsId = await this.updateUserRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("Invalid token");
        }
        this.validationsUpdateUser.validationEmail(user);
        this.validationsUpdateUser.validationName(user);
        this.validationsUpdateUser.validationPassword(user);
        const existsEmail = await this.updateUserRepository.existsEmail(user.email || "");
        if (existsEmail !== null && existsEmail.id === user.id) {
            await this.updateUserRepository.update(user, user.id);
            return;
        }
        if (existsEmail !== null)
            throw new Error("E-mail already exists");
    }
}
exports.UpdateUser = UpdateUser;
//# sourceMappingURL=UpdateUser.js.map