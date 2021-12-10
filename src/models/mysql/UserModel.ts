import { Model, DataTypes } from "sequelize";

import { connectionMySql } from "../../database/ConnectionMySql";
import { ICreateUserAttributes } from "../ICreateUserAttributes";
import { IUsersAttributes } from "../IUserAttributes";

class User extends Model<IUsersAttributes, ICreateUserAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: "",
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
  },
  {
    sequelize: connectionMySql.connection,
  },
);

export { User };
