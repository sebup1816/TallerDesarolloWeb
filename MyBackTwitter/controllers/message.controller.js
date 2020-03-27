const dbManager = require('../database/db.mannager');

/**
 * CREATE NEW MESSAGE
 */

function createNewMesssage (req, res){
    try{
        const newMessageObject = {
            message: req.body.message,
            idUser: req.params.idUser,
            id
        }
        dbManager.Message.create(neWMessageObject).then (
            data => {
                res.send (data);
            })
    }catch{
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    }
 }

 function findMessage (){
    
 }

