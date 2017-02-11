var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/chatClient/index.html');
});


io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('message', function(message) {
    console.log(message);
    socket.emit('message', message);
  });
});

http.listen(3000, function() {
  console.log('listening on port 3000');
});
