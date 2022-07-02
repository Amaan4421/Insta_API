const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
        operatorsAliases: false,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user_model = require("../models/users.js")(sequelize, Sequelize);
db.post_model = require("../models/post.js")(sequelize, Sequelize);
db.image_model= require("../models/image.js")(sequelize, Sequelize);

module.exports = db;