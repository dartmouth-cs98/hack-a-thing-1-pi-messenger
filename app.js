var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// User initially connects
io.on('connection', function(socket) {
  console.log("User connected.");
  socket.on('disconnect', function() {
    console.log('User disconnected.');
  });
});

// User sends message
io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });
});

http.listen(3000, function() {
  console.log('Listening on port 3000');
});
