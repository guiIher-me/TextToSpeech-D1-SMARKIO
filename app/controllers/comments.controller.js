const DB = require('../models/connection');
const TTS = require('../watson-api/index');
const helper = require('../helpers/HelperComments');

module.exports = {
	async home(req, res) {
		res.render('index');
	},

	async getAll(req, res) {
		let comments;
		try {
			comments = await DB.Comments.findAll({order: [['createdAt', 'DESC']]});
		} catch {
			return res.status(500).json({ error: 'Erro ao consultar dados do servidor' });
		}

		return res.status(200).json(comments);
	},

	async save(req, res) {
		const comment_text = req.body.data;
		const comment_hash = helper.hashCode(comment_text);
	
		let ret;
		try {
			ret = await DB.Comments.create({comment: comment_text, hash:comment_hash});
		} catch(error) {
			return res.status(500).json({ error: 'Erro ao salvar dados' });
		}

		if( !helper.soundExists(comment_hash) ) {
			try {
	            response = await TTS.getAudio(comment_text, comment_hash);
	        } catch (error) {
	            return res.status(500).json({ error: 'Erro ao consultar dados da API' });
	        }
		}

		return res.status(200).json({data: ret.dataValues});
	}

}
