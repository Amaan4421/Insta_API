module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        username:{
            allowNull: false,
            type: Sequelize.STRING,
        },
        firstname: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        lastname: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        mobileno: {
            allowNull: false,
            type: Sequelize.INTEGER,
        },
        email: {
            allowNull: false,
            type: Sequelize.STRING,
        },
        password: {
            allowNull: false,
            type: Sequelize.STRING,
        },
    }, {
        timestamps: false,
        freezeTableName: true // Model tableName will be the same as the model name
    });
    return Users;
};