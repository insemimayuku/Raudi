const express = require('express');
const router = express.Router();
const userController = require('../controllers/route/user/index');


// Pour créer une table utilisateur, créer, modifier et supprimer un utilisateur
router.post('/createTableUser', userController.createTableUser);
router.put('/createUser', userController.createUser);
router.post('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

router.get('/login', userController.Login);
router.get('/register', userController.Register);


module.exports = router; 