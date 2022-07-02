module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("post_reaction", {
        post_id:{
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        post_of:{
            allowNull: false,
            type: Sequelize.STRING,
        },
        liked_by:{
            allowNull: false,
            type: Sequelize.STRING,
        },
    },{
        timestamps: true,
        freezeTableName: true 
    });
    return Users;
};