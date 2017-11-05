const socket = io('https://localhost:8080/')

function spray() {
  socket.emit('spray', true)
  console.log('spray')
}

chrome.storage.sync.get('on', (response) => {
  if (response.on) {
    spray()
  }
})
