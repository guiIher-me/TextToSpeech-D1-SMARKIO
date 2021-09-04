const express  = require('express');
const Comments = require('../controllers/comments.controller');

module.exports = function(app) {
	app.get('/', Comments.home);
	app.get('/comments', Comments.getAll);
};
