require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize
(process.env.DB_DATABASE, 
 process.env.DB_USER,
 process.env.DB_PASS, {
	host: process.env.DB_HOST,
	dialect: 'mysql'
});

sequelize.authenticate().then(function() {
	console.log('conexão criada com sucesso!');
}).catch(function(err) {
	console.log('Erro' + err);
});

const DB = {};

//Models
DB.Comments = require("../models/comments.model.js")(sequelize, Sequelize.DataTypes);

//cria a tabela, apaga antes se true:
DB.Comments.sync({force: false});

DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

module.exports = DB;