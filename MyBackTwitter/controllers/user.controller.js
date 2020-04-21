const dbManager = require('../database/db.mannager');

/*
    Create a new user
*/

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
        password:req.body.password,
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

/*

    SHOW ALL THE USERS IN THE DB

*/
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

/*

    FIND A SINGLE USER BY ID

*/

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


/*

    DELETE A USER BY ID

*/

function deleteUserById(req,res){
    try{
        const {idUser} = req.params;
        const users = dbManager.User.findAll();

       const user = dbManager.User.destroy({
            where:{
                idUser: idUser
            }
        });
        res.json(users);

    }catch(error){
        // Print error on console
        console.log(error);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

function addFollowers(req,res){
    try{
        const {idUser} = req.params;
        const user =  dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        console.log(idUser.follower);

    }catch{
        // Print error on console
        console.log(error);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }

}

async function login(req,res){
    try {
        const { username,password } = req.params;
        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                username: username,
                password:password
            }
        });
        if(user!=null){
            res.send("true");
        }else{
            res.send("false");
        }

    } catch (error) {
        // Print error on console
        console.log(error);
    }
}

//EXPORTS
exports.login=login;
exports.addFollowers=addFollowers;
exports.deleteUserById=deleteUserById;
exports.findUserById=findUserById;
exports.findAllUsers=findAllUsers;
exports.createUser= createUser;
    