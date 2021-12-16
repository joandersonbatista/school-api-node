"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn("users", "password_hash", "password");
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.renameColumn("users", "password", "password_hash");
    },
};
//# sourceMappingURL=20211209133344-renaming-password_hash-column-to-user-table-password.js.map