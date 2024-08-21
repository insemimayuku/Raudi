import sequelize from "./db.js";
import VehiculeOption from "../../models/vehicule/vehicule_options.js";
import Vehicule from "../../models/vehicule/vehicule.model.js";

class db {
  constructor() {
    this.sequelize = sequelize;
  }

  async init() {
    await this.sequelize.sync();
  }

  async getVehiculewithOptions() {
    await this.ensureInitialized();

    const data = await Vehicule.findAll({
      include: VehiculeOption,
    });
    return data;
  }

  async createVehicule({
    marque,
    nombre_de_portes,
    nombre_de_places,
    type_de_carburant,
    annee,
    options,
    prix,
  }) {
    await this.ensureInitialized();
    const data = await Vehicule.create({
      marque,
      nombre_de_portes,
      nombre_de_places,
      type_de_carburant,
      annee,
      prix,
    });

    const optionsPromises = options.map((option) => {
      return VehiculeOption.create({
        vehiculeId: data.id,
        optionName: option,
      });
    });

    await Promise.all(optionsPromises);
    return {
      data: data.dataValues,
      options,
    };
  }

  async ensureInitialized() {
    if (!this.initialized) {
      await this.init();
      this.initialized = true;
    }
  }
}

export default db;
