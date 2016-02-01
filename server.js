var express = require('express');
//var body_parser = require('body-parser');
var app = express();

app.get('/', function (req, res) {
  res.json({Hello: 'World!'});
});

app.listen(3000, function () {
  console.log('App listening on port 3000!');
});