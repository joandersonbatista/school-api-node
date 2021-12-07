import { Model, DataTypes } from "sequelize";

import { ConnectionDB } from "../../database/ConnectionDb";
import { ICreateStudentAtributes } from "../ICreateStudentAttributes";
import { IStudentsAttributes } from "../IStudentsAttributes";
import { ProfilePicture } from "./ProfilePicture";

class Student extends Model<IStudentsAttributes, ICreateStudentAtributes> {}

Student.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    height: {
      type: DataTypes.FLOAT,
      allowNull: true,
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

Student.hasOne(ProfilePicture, {
  sourceKey: "id",
  foreignKey: "student_id",
  as: "profile_picture",
});

export { Student };
