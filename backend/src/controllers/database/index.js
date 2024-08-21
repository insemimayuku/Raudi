import sequelize from "./db.js";
import VehiculeOption from "../../models/vehicule/vehicule_options.js";
import Vehicule from "../../models/vehicule/vehicule.model.js";
class db {
  constructor() {
    this.sequelize = sequelize;
    //check if all table exist
    this.sequelize.sync();
  }
}

export default db;
