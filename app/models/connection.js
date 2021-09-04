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

const DB = {};

//Models
DB.Comments = require("../models/comments.model.js")(sequelize, Sequelize.DataTypes);

//cria a tabela, apaga antes se necessário:
//DB.Comments.sync({force: true});

DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

module.exports = DB;