var express = require('express');
var app = express();

app.get('/', function(request, response){
  response.sendFile(__dirname + './simpleClient/index.html');
});


app.listen(3000, function(){
  console.log('listening on port 3000');
});


