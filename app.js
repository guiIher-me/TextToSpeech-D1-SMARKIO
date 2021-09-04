require('dotenv/config');
var app = require('./app/config/server');
var route_comments = require('./app/routes/comments')(app);


app.listen(3000, function() {
	console.log("localhost:3000")
});