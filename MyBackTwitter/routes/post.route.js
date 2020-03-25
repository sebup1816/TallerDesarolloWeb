var express = require('express');
var router = express.Router();

const postController= require('../controllers/post.controller');

//POST 
router.get('/', postController.findAllPost);
router.post('/', postController.addTwett);
router.delete('/:idPost',postController.deletePostById);

module.exports=router;