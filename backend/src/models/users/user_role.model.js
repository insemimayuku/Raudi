import { DataTypes } from "@sequelize/core";
import sequelize from "../../controllers/database/db.js";
import User from "./user.model.js";
import user from "./user.model.js";

const user_role = sequelize.define(
  "user_role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "user_role",
    timestamps: false,
    freezeTableName: true,
    log: false,
  }
);

export default user_role;
