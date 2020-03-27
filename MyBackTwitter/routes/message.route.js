var express = require('express');
var router = express.Router();

const messageController= require('../controllers/message.controller');

// ROUTES

router.post('/', messageController.createNewMesssage);