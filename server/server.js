const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('Connected');
  socket.on('disconnect', function(){
    console.log('Disconnected')
  });

  socket.on('spray', () => {
    
  })
});
