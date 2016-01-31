var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World from my new server')
});

app.listen(2000);
console.log('Server running on port 2000');