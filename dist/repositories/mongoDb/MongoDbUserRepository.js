"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDbUserRepository = void 0;
const MongoDbUser_1 = require("../../models/mongoDb/MongoDbUser");
class MongoDbUserRepository {
    async save(user) {
        return await MongoDbUser_1.MongoDbUser.create(user);
    }
    async update(user, id) {
        await MongoDbUser_1.MongoDbUser.updateOne({ id }, user);
    }
    async existsUserToken(id, email) {
        const user = await MongoDbUser_1.MongoDbUser.findOne({ id, email });
        if (user === null)
            return null;
        return user;
    }
    async existsEmail(email) {
        const user = await MongoDbUser_1.MongoDbUser.findOne({ email });
        if (user === null)
            return null;
        return user;
    }
    async delete(id) {
        await MongoDbUser_1.MongoDbUser.deleteOne({ id });
    }
    async existsId(id) {
        const user = await MongoDbUser_1.MongoDbUser.findOne({ id });
        if (user === null)
            return null;
        return user;
    }
    async read(id) {
        const user = await MongoDbUser_1.MongoDbUser.findOne({ id });
        return new Array(user);
    }
}
exports.MongoDbUserRepository = MongoDbUserRepository;
//# sourceMappingURL=MongoDbUserRepository.js.map