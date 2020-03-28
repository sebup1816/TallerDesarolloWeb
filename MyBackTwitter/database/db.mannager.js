//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS
const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");
<<<<<<< HEAD
const MessageModel = require("../models/message.model");
=======
const MessageModel = require ("../models/message.model");
>>>>>>> 2f56946ca6511d65c19dad39fc2f74ffc08415d2

//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);
const Message = MessageModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
User.hasMany(Post, { foreignKey: 'idPost', sourceKey: 'idUser' });
Post.belongsTo(User, { foreignKey: 'idUser', sourceKey: 'idPost' });
User.hasMany(Message, { foreignKey: 'idMessage', sourceKey: 'idUser' });
Message.belongsTo(User, { foreignKey: 'idUser', sourceKey: 'idMessage' });

User.hasMany(Message,{foreignKey: 'idMessage', sourceKey: 'idUser'});
Message.belongsTo(User, { foreignKey: 'idUser', sourceKey: 'idMessage' });

//GROUP MODELS
const models = {
  User: User,
  Post: Post,
<<<<<<< HEAD
  Message: Message
=======
  Message: Message,
>>>>>>> 2f56946ca6511d65c19dad39fc2f74ffc08415d2
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;