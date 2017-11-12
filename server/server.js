const fs = require('fs')
const https = require('https')
const five = require('johnny-five')
const board = new five.Board()
const sleep = require('sleep').msleep

const options = {
  key: fs.readFileSync(__dirname + '/ssl/server.pem'),
  cert: fs.readFileSync(__dirname + '/ssl/server.crt')
}

let start = 0
let spray = (servo, degrees) => {
  servo.to(degrees)
  sleep(800)
  servo.to(start)
}

board.on('ready', function() {
  let pin = 9
  let servo = new five.Servo({
    pin: 9,
    startAt: start
  })

  this.repl.inject({
    servo: servo
  })

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
      spray(servo, 140)
    })
  })

  server.listen(port, () => {
    console.log('listening on https://localhost:' + port)

    require('dns').lookup(require('os').hostname(), (err, add, fam) => {
      console.log('https://' +add + ':' + port)
    })
  })
})
