chrome.storage.sync.get('on', (response) => {
  if (response.on) {
    const socket = io('https://localhost:8080/')
    socket.emit('spray', true)
    console.log('spray')
    console.log(option)
  }
})
