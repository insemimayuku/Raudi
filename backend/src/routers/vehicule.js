const express = require('express');
const router = express.Router();
const vehiculeController = require('../controllers/route/vehicule/index');


router.post('/createTableVehicule' , vehiculeController.createTablevehicule);
router.put('/createVehicule', vehiculeController.createVehicule);
router.post('/updateVehicule', vehiculeController.updateVehicule);
router.delete('/deleteVehicule', vehiculeController.deleteVehicule);


module.exports = router; 