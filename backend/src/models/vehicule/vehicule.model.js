import { DataTypes } from "@sequelize/core";
import sequelize from "../../controllers/database/db.js";

const vehicule = sequelize.define(
  "vehicule",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    marque: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    nombre_de_portes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre_de_places: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type_de_carburant: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    annee: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },

  {
    tableName: "vehicule",
    timestamps: false,
    log: false,
  }
);

export default vehicule;
