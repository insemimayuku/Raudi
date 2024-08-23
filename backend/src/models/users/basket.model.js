import { DataTypes } from "@sequelize/core";
import sequelize from "../../controllers/database/db.js";
import user from "./user.model.js";
import VehiculeOption from "../vehicule/vehicule_options.js";

const user_basket = sequelize.define(
  "user_basket",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: user,
          key: "id",
        },
        allowNull: false,
    },
    vehivule_optionId: {
        type: DataTypes.INTEGER,
        references: {
            model: VehiculeOption,
            key: "id",
        }
    },
  },
  

  {
    tableName: "user_basket",
    timestamps: false,
    log: false,
  }
);

export default user_basket;
