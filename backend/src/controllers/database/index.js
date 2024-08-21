import sequelize from "./db.js";
import VehiculeOption from "../../models/vehicule/vehicule_options.js";
import Vehicule from "../../models/vehicule/vehicule.model.js";
class db {
  constructor() {
    this.sequelize = sequelize;
    //check if all table exist
    this.sequelize.sync();
  }
  async getVehiculeOptions() {
    return await Vehicule.findAll();
  }
  async createVehicule({
    marque,
    nombre_de_portes,
    nombre_de_places,
    type_de_carburant,
    annee,
  }) {
    return await Vehicule.create({
      marque,
      nombre_de_portes,
      nombre_de_places,
      type_de_carburant,
      annee,
    });
  }
}

export default db;
