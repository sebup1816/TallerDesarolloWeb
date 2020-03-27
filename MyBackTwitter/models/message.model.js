module.exports = (sequelize, Sequelize) =>{
    const Message = sequelize.define ("Post", 
        {
            idMessage: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            idReceiver: {
                type: Sequelize.INTEGER
            },
            message: {
                type: Sequelize.STRING,
                creation_date: Sequelize.DATE,
            },
        }, {
            tableName: "posts"
        }
    );
    return Post;
}