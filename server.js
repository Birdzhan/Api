var express = require('express');
var body_parser = require('body-parser');
var app = express();

var port = 3000;

/*app.get('/', function(req, res){
	res.json({hello: "world"});
});
*/
app.use('/api', require('./routes/api.js')(express));

app.listen(port, function(){
	console.log('Server listening on', port);
});