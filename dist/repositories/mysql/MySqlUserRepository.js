"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlUserRepository = void 0;
const UserModel_1 = require("../../models/mysql/UserModel");
class MysqlUserRepository {
    async save(user) {
        return (await UserModel_1.User.create(user)).get();
    }
    async existsEmail(email) {
        const existsEmail = await UserModel_1.User.findOne({
            where: { email },
        });
        if (existsEmail === null)
            return null;
        return existsEmail.get();
    }
    async delete(id) {
        await UserModel_1.User.destroy({ where: { id } });
    }
    async existsId(id) {
        const existId = await UserModel_1.User.findOne({ where: { id } });
        if (existId === null)
            return null;
        return existId.get();
    }
    async read(id) {
        const user = await UserModel_1.User.findOne({ where: { id } });
        return new Array(user.get());
    }
    async update(user, id) {
        await UserModel_1.User.update(user, { where: { id } });
    }
    async existsUserToken(id, email) {
        const userExists = await UserModel_1.User.findOne({
            where: { id, email },
        });
        if (userExists === null)
            return null;
        return userExists.get();
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
//# sourceMappingURL=MySqlUserRepository.js.map