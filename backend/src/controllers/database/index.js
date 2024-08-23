import sequelize from "./db.js";
import VehiculeOption from "../../models/vehicule/vehicule_options.js";
import Vehicule from "../../models/vehicule/vehicule.model.js";
import user from "../../models/users/user.model.js";
import init from "./init.js";
import bcrypt from "bcrypt";
class db extends init {
  constructor() {
    super();
    this.sequelize = sequelize;
  }

  async getAllVehicule() {
    await this.ensureInitialized();

    const data = await Vehicule.findAll({
      include: VehiculeOption,
    });
    return data;
  }
  async getSingleVehicule(id) {
    await this.ensureInitialized();
    const data = await Vehicule.findOne({
      where: {
        id,
      },
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
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = await user.create({
      nom,
      prenom,
      email,
      password: hashedPassword,
    });
    return data;
  }
  async updateUser({ id, nom, prenom, email, password }) {
    await this.ensureInitialized();
    const data = await user.update(
      {
        nom,
        prenom,
        email,
        password,
      },
      {
        where: {
          id,
        },
      }
    );
    return data;
  }
  async deleteUser({ id }) {
    await this.ensureInitialized();
    const data = await user.destroy({
      where: {
        id,
      },
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
  async getUserById(id) {
    await this.ensureInitialized();
    const data = await user.findOne({
      where: {
        id,
      },
    });
    return data;
  }
  async login({ email, password }) {
    await this.ensureInitialized();
    const data = await this.getUserByEmail(email);
    if (data) {
      const isValid = await bcrypt.compare(password, data.password);
      if (isValid) {
        return data;
      }
    }
    return null;
  }
}

export default db;
