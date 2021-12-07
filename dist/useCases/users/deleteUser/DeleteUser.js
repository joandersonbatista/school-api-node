"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = void 0;
class DeleteUser {
    deleteUserRepository;
    constructor(deleteUserRepository) {
        this.deleteUserRepository = deleteUserRepository;
    }
    async execute(user) {
        const existsId = await this.deleteUserRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("invalid token");
        }
        await this.deleteUserRepository.delete(user.id);
    }
}
exports.DeleteUser = DeleteUser;
//# sourceMappingURL=DeleteUser.js.map