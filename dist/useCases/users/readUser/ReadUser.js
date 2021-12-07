"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUser = void 0;
class ReadUser {
    readUserRepository;
    constructor(readUserRepository) {
        this.readUserRepository = readUserRepository;
    }
    async execute(user) {
        const existsId = await this.readUserRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("invalid token");
        }
        return await this.readUserRepository.read(user.id);
    }
}
exports.ReadUser = ReadUser;
//# sourceMappingURL=ReadUser.js.map