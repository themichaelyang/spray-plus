let toggle = false

chrome.browserAction.onClicked.addListener((tab) => {
  toggle = !toggle;

  if (toggle) {
    chrome.browserAction.setIcon({ path: "icons/on.png" })
    // chrome.tabs.executeScript({ file: "spray.js" })
  }
  else {
    chrome.browserAction.setIcon({ path: "icons/off.png" })
    // chrome.tabs.executeScript({ code: 'alert("Off!")' })
  }
})
