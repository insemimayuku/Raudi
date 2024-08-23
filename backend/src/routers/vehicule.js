import express from "express";
const vehiculerouter = express.Router();
import { getAllvehicule } from "../controllers/route/vehicule/index.js";
vehiculerouter.get("/all", getAllvehicule);

/* router.post("/createTableVehicule", vehiculeController.createTableVehicule);
router.put("/createVehicule", vehiculeController.createVehicule);
router.post("/updateVehicule", vehiculeController.updateVehicule);
router.delete("/deleteVehicule", vehiculeController.deleteVehicule); */

export default vehiculerouter;
