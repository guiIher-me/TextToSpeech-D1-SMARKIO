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
	},

	async save(req, res) {
		const comment_text = req.body.data;
		
		let ret;
		try {
			ret = await DB.Comments.create({comment: comment_text});
		} catch(error) {
			console.log(error);
		}

		return res.status(200).json({data: ret.dataValues});
	}

}
