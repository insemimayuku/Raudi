import { DataTypes } from "@sequelize/core";
import sequelize from "../../controllers/database/db.js";
import Vehicule from "./vehicule.model.js";

const VehiculeOption = sequelize.define(
  "vehicule_options",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    vehiculeId: {
      type: DataTypes.INTEGER,
      references: {
        model: Vehicule,
        key: "id",
      },
      allowNull: false,
    },
    optionName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: "vehicule_options",
    timestamps: false,
    log: false,
  }
);

Vehicule.hasMany(VehiculeOption, { foreignKey: "vehiculeId" });
VehiculeOption.belongsTo(Vehicule, { foreignKey: "vehiculeId" });

export default VehiculeOption;
