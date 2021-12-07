"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("profile_pictures", {
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            fieldname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            originalname: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            mimetype: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            filename: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            size: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            url: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            student_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: "students",
                    key: "id",
                },
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("profile_pictures");
    },
};
//# sourceMappingURL=20211205153737-adding-profile-picture-table.js.map