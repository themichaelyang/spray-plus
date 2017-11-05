const socket = io('https://localhost:8080/')

let spray = () => {
  if (socket) {
    socket.emit('spray', true)
    console.log('spray')
  }
}

chrome.storage.sync.get('on', (response) => {
  if (response.on) {
    // spray once every 2 seconds
    setInterval(spray, 2000)
  }
})
