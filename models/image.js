module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("image", {
        user_id:{
            allowNull: false,
            foreignKey: true,
            type: Sequelize.INTEGER,
        },
        post_by:{
            allowNull: false,
            type: Sequelize.STRING,
        },
    },{
        timestamps: true,
        freezeTableName: true 
    });
    return Users;
};