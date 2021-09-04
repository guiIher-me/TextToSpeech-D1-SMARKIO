const Sequelize = require('sequelize');
const sequelize = new Sequelize
('commentsDB', 
 'root',
 'root', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate().then(function() {
	console.log('conexão criada com sucesso!');
}).catch(function(err) {
	console.log('Erro' + err);
});

//cria a tabela, apaga antes se necessário:
//Comment.sync({force: true});

const DB = {};

//Models
DB.Comments = require("../models/comments.model.js")(sequelize, Sequelize.DataTypes);

DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

module.exports = DB;