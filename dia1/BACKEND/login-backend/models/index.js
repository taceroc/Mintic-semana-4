const { Sequelize, DataTypes } = require("sequelize");
const UserModel = require("./users.js");

const sequelize = new Sequelize('9dHYgiyygc', '9dHYgiyygc', '3EoOFVN3vA', {
    host: 'remotemysql.com',
    dialect: 'mysql'
  });

const User = UserModel(sequelize, Sequelize);

//es una promesa, se deora
sequelize.sync({ force: false })
.then(()=> {
        console.log("Tablas sincronizadas")
    });

module.exports= {
    User
};