const DB = require('../models/connection');

module.exports = {

	async home(req, res) {
		res.render('index');
	},

	async getAll(req, res) {
		let comments;
		try {
			comments = await DB.Comments.findAll();
		} catch {
			console.log("Erro ao consultar dados");
		}

		return res.status(200).json(comments);
	}

}
