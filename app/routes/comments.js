const express  = require('express');
const Comments = require('../controllers/comments.controller');

module.exports = function(app) {
	app.get('/', Comments.home);
	app.get('/comments', Comments.getAll);
	app.post('/comments', Comments.save);
	app.get('/sound/:text', Comments.getSound);

	app.use(function(req, res, next) {
		res.status(404).render('404');
	});
};
