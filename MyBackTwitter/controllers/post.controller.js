const dbManager = require('../database/db.mannager');


/**
 * 
 *  CREATE A NEW POST
 * 
 */

// CHECK IF THE REQUEST BODY IS EMPTY
async function addTwett(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
    }
    // CREATING THE OBJECT TO PERSIST
    const newPostObject = {
        message: req.body.message,
        idUser: req.params.idUser
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Post.create(newPostObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}


/*
    SHOW ALL THE POST
*/

async function findAllPost (req, res){
    try {
        //Execute query
        const post = await dbManager.Post.findAll ();
        
        //Send response
        res.json({
                data: post
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


/*
    DELETE POST BY ID
*/

async function deletePostById(req,res){
    try{
        const {idPost} = req.params;

       const post = await dbManager.Post.destroy({
            where:{
                idPost: idPost
            }
        });
        res.json(post);

    }catch(error){
        // Print error on console
        console.log(error);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}

/**
 *
 *  SHOW POST BY ID USER 
 *
 */



async function findPostByIdUser(req,res){
    try{

       const {idUser} = req.params;

       const post = await dbManager.Post.findAll({
            where:{
                idUser: idUser
            }
        });

        res.json(post);
    }catch{
        console.log("error");
    }
}


//EXPORTS
exports.findPostByIdUser=findPostByIdUser;
exports.deletePostById=deletePostById;
exports.addTwett=addTwett;
exports.findAllPost=findAllPost;