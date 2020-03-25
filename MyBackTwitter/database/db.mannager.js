//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('./db.connection');

//IMPORT MODELS
const UserModel = require("../models/user.model");
const PostModel = require("../models/post.model");

//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
const Post = PostModel (sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
User.hasMany(Post, { foreignKey: 'idPost', sourceKey: 'idUser' });
Post.belongsTo(User, { foreignKey: 'idUser', sourceKey: 'idPost' });

//GROUP MODELS
const models = {
  User: User,
  Post: Post,
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