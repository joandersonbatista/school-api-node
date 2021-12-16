"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadUser = void 0;
class ReadUser {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(user) {
        const existsId = await this.userRepository.existsId(user.id);
        if (existsId === null) {
            throw new Error("user does not exist");
        }
        return await this.userRepository.read(user.id);
    }
}
exports.ReadUser = ReadUser;
//# sourceMappingURL=ReadUser.js.map