var express = require('express');
var router = express.Router();

const postController= require('../controllers/post.controller');

//ROUTES 
router.get('/', postController.findAllPost);
router.post('/:idUser', postController.addTwett);
router.delete('/:idPost',postController.deletePostById);
router.get('/:idUser',postController.findPostByIdUser);
module.exports=router;