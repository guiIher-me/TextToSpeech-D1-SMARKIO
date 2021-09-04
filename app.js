require('dotenv').config();
var app = require('./app/config/server');
var route_comments = require('./app/routes/comments')(app);

app.listen(process.env.SERVER_PORT, function() {
	console.log("localhost:" + process.env.SERVER_PORT);
});