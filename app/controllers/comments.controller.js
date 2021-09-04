const DB = require('../models/connection');

module.exports = {

	async show(req, res) {
		let comments;
		try {
			comments = await DB.Comments.findAll();
		} catch {
			console.log("Erro ao consultar dados");
		}

		res.render('index', {comments});
	}

}
