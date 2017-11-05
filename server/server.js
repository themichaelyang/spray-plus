const fs = require('fs')
const https = require('https')
const options = {
  key: fs.readFileSync(__dirname + '/ssl/server.pem'),
  cert: fs.readFileSync(__dirname + '/ssl/server.crt')
}

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('okay')
})

const io = require('socket.io')(server)
const port = 8080

io.on('connection', (socket) => {
  console.log('Connected')
  socket.on('disconnect', () => {
    console.log('Disconnected')
  });

  socket.on('spray', () => {
    console.log('SPRAY ***')
  })
})

server.listen(port, () => {
  console.log('listening on https://localhost:' + port)

  require('dns').lookup(require('os').hostname(), (err, add, fam) => {
    console.log('https://' +add + ':' + port)
  })
})
