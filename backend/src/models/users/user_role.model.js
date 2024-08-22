import sequelize from "../../controllers/database/db.js";
import User from "./user.model.js";
import { DataTypes } from "@sequelize/core";

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
      type: DataTypes.ENUM("client", "commercial", "admin"),
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

User.hasOne(user_role, { foreignKey: "userId" });
user_role.belongsTo(User, { foreignKey: "userId" });

export default user_role;
