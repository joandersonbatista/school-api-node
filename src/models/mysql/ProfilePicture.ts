import { Model, DataTypes } from "sequelize";

import { ConnectionDB } from "../../database/ConnectionDb";
import { ICreateProfilePictureAttributes } from "../ICreateIProfilePictureAttributes";
import { IProfilePictureAttributes } from "../IProfilePictureAttributes";

class ProfilePicture extends Model<
  IProfilePictureAttributes,
  ICreateProfilePictureAttributes
> {}

ProfilePicture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    fieldname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originalname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    url: {
      type: DataTypes.STRING,
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

export { ProfilePicture };
