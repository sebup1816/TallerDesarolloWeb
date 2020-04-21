var express = require('express');
var router = express.Router();
const userController= require('../controllers/user.controller');

/* GET users listing. */
router.post('/', userController.createUser);
router.get('/', userController.findAllUsers);
router.get('/:idUser', userController.findUserById);
router.delete('/:idUser',userController.deleteUserById);
router.get('/:username/:password',userController.login);



module.exports = router;
