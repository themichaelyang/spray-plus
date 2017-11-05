let toggle = false

chrome.storage.sync.get('on', (option) => {
  if (option === false || option === true) {
    toggle = option
  }
  else {
    chrome.storage.sync.set( { on: false });
  }
})

chrome.browserAction.onClicked.addListener((tab) => {
  toggle = !toggle

  if (toggle) {
    chrome.browserAction.setIcon({ path: "icons/on.png" })
    chrome.tabs.executeScript(tab.id, { file: 'javascript/spray.js' })
  }
  else {
    chrome.browserAction.setIcon({ path: "icons/off.png" })
  }

  chrome.storage.sync.set({ on: toggle })
})
