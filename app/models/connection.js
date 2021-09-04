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

/*DB.Comments.create({comment: 'Num ninho de mafagafos há sete mafagafinhos. Quando a mafagafa gafa, gafam os setes mafagafinhos'});
DB.Comments.create({comment: 'O rato roeu a rica roupa do Rei de roma, a rainha raivosa rasgou o resto e depois resolveu remendar'});
DB.Comments.create({comment: 'Trazei três pratos de trigo para três tigres tristes comerem!'});
*/

DB.Sequelize = Sequelize;
DB.sequelize = sequelize;

module.exports = DB;