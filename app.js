var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

const accountSid = 'AC25d08bb183858773afa9775933db9176';
const authToken = '3d494383caea19af8f1284538f978b26';
const client = require('twilio')(accountSid, authToken);

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
    client.messages
      .create({
        body: msg,
        from: '+12406182493',
        to: '+12023521818'
      })
      .then(message => console.log(message.sid))
      .done();
    console.log('message: ' + msg);
  });
});

http.listen(3000, function() {
  console.log('Listening on port 3000');
});

