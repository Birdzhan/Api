
var request = require('supertest'),
    express = require('express'),
    should = require('should');

describe('request(url)', function(){
  it('should say Hello World', function(done){
    var app = express();
    app.get('/', function(req, res){
      res.send('Hello World');
    });

    var test = app.listen(function(){
 	var url = 'http://localhost:' + test.address().port;      
 	request(url)
      .get('/')
      .expect("Hello World", done);
    });

  });

});