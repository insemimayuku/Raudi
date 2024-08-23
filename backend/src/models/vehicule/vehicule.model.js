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
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    marque: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    modele: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    longeur: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    largeur: {
      type: DataTypes.FLOAT,
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
      type: DataTypes.ENUM(
        "DIESEL",
        "ESSENCE",
        "HYBRID",
        "ELECTRIQUE",
        "HYDROGENE"
      ),
      defaultValue: "DIESEL",
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
    image: {
      type: DataTypes.STRING(255),
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
