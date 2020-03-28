var express = require('express');
var router = express.Router();

const messageController= require('../controllers/message.controller');

// ROUTES
router.get('/:idUser/:idReceiver',messageController.findMessage);
router.post('/:idUser/:idReceiver', messageController.createNewMesssage);
module.exports=router;