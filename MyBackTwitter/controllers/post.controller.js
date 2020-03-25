const dbManager = require('../database/db.mannager');

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


function deletePostById(req,res){
    try{
        const {idPost} = req.params;

       const post = dbManager.Post.destroy({
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

//EXPORTS
exports.deletePostById=deletePostById;
exports.addTwett=addTwett;
exports.findAllPost=findAllPost;