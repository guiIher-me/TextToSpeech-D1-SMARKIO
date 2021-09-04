const express = require('express');
const Comments = require('../controllers/comments.controller');

module.exports = function(app) {
	app.get('/', Comments.show);

	/*app.get('/', function(req, res) {
		res.render("index");
	});*/
};
