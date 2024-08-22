import user from'./models/users/user.model.js'
import user_role from './models/users/user_role.model.js'
import vehicule from './models/vehicule/vehicule.model.js'
import veh_opt from './models/vehicule/vehicule_options.js'

const createTable = async () => {
  await user.sync({ force: true });
  await user_role.sync({ force: true });
  await vehicule.sync({ force: true });
  await veh_opt.sync({ force: true });
};

createTable()
