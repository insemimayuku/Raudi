import sequelize from "./db.js";
import VehiculeOption from "../../models/vehicule/vehicule_options.js";
import Vehicule from "../../models/vehicule/vehicule.model.js";
import user from "../../models/users/user.model.js";
import init from "./init.js";

class db extends init {
  constructor() {
    super();
    this.sequelize = sequelize;
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

  async createUser({ nom, prenom, email, password }) {
    await this.ensureInitialized();
    const data = await user.create({
      nom,
      prenom,
      email,
      password,
    });
    return data;
  }
  async getUserByEmail(email) {
    await this.ensureInitialized();
    const data = await user.findOne({
      where: {
        email,
      },
    });
    return data;
  }
}

export default db;
