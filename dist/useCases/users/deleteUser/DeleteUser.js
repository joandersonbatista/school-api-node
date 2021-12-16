"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(user) {
        const existsId = await this.userRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("user does not exist");
        }
        await this.userRepository.delete(user.id);
    }
}
exports.DeleteUser = DeleteUser;
//# sourceMappingURL=DeleteUser.js.map