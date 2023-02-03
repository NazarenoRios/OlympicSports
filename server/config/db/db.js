const Sequelize = require("sequelize");

const db = new Sequelize("olympicsports","postgres", "1234", {
    host: "localhost",
    dialect: "postgres",
    logging: false
});


module.exports = db

