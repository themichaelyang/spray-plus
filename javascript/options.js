const validate = (regex, str) => {
  return regex.test(str)
}

const save = (key, value) => {
  chrome.storage.sync.set({ key: value })
}

const main = () => {
  const regex = /(\d+)(,\s*\d+)/
  const textarea = document.getElementById('blocked')
  const saveButton = document.getElementById('save')

  // 1. Add listener for updates
  // chrome.storage.onChanged.addListener((changes, namespace) => {
  //   for (key of changes) {
  //     let storageChange = changes[key];
  //
  //     console.log('Storage key "%s" in namespace "%s" changed. ' +
  //     'Old value was "%s", new value is "%s".',
  //     key,
  //     namespace,
  //     storageChange.oldValue,
  //     storageChange.newValue);
  //   }
  // })

  // 2. Update the text area
  chrome.storage.sync.get('blocked-sites', (options) => {
    if (options.blockedSites) {
      textarea.value = options.blockedSites;
    }
  })

  // 3. Listen for changes
  saveButton.addEventListener('click', (event) => {
    let newValue = textarea.value

    // if (validate(regex, newValue)) {
      save('blocked-sites', newValue)
    // }
    // else {
      // alert('Invalid format! Use CSV formatted.')
    // }
  })
}

window.onload = main
