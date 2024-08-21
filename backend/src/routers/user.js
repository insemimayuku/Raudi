const express = require('express');
const router = express.Router();
const userController = require('../controllers/route/user/index');


router.post('/createTableUser', userController.createTableUser);
router.put('/createUser', userController.createUser);
router.post('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);


module.exports = router; 