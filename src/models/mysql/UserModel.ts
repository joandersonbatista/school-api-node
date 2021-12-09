import { Model, DataTypes } from "sequelize";

import { ConnectionDB } from "../../database/ConnectionDb";
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
    sequelize: ConnectionDB.connection,
  },
);

/* User.addHook("beforeSave", async (user) => {
  if (user.getDataValue("password")) {
    const passwordHash = await bcryptjs.hash(user.getDataValue("password"), 8);
    user.set("password_hash", passwordHash);
  }
}); */

export { User };
