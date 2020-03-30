const dbManager = require('../database/db.mannager');

/**
 * CREATE NEW MESSAGE
 */

async function createNewMesssage(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
    }
    // CREATING THE OBJECT TO PERSIST
    const newMessageObject = {
        message: req.body.message,
        idUser: req.params.idUser,
        idReceiver: req.params.idReceiver
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.Message.create(newMessageObject).then (
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


 async function findMessage(req,res){
    try{
        const {idUser,idReceiver} = req.params;

        const message= await dbManager.Message.findAll({
            where:{
                idUser: idUser,
                idReceiver: idReceiver
            }
        });
        res.json(message);
    }catch(error){
        console.log("error");
    }
 }

//EXPORTS
exports.findMessage=findMessage;
exports.createNewMesssage=createNewMesssage;