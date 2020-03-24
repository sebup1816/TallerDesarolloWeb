const dbManager = require('../database/db.mannager');

// CHECK IF THE REQUEST BODY IS EMPTY
async function createUser(req,res){
    if(!req.body){
        res.status (400).send(
            {   
                message: "REQUEST IS EMPTY!"
            }
        );
        return;
    }
// CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        username: req.body.username,
        creation_date: req.body.creation_date
    }
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
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


async function findAllUsers (req, res){
    try {
        //Execute query
        const users = await dbManager.User.findAll ();
        
        //Send response
        res.json({
                data: users
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

async function findUserById (req, res){
    try {
        const { idUser } = req.params;
        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

    } catch (error) {
        // Print error on console
        console.log(error);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


exports.findUserById=findUserById;
exports.findAllUsers=findAllUsers;
exports.createUser= createUser;
    