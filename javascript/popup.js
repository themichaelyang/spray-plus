let main = () => {
  let startButton = document.getElementById('start')
  startButton.addEventListener('click', (event) => {
    chrome.tabs.executeScript({ file: 'javascript/spray.js' })
    window.close()
  })
}

window.onload = main
