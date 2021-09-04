require('dotenv/config');
var app = require('./config/server');
var route_comments = require('./app/routes/comments')(app);


app.listen(3000, function() {
	console.log("localhost:3000")
});