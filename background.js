chrome.commands.onCommand.addListener((command) => {
  if (command === "open-tab-next") {
    // Get the current active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        const currentTab = tabs[0];
        
        // Create a new tab immediately to the right of the current one
        chrome.tabs.create({
          index: currentTab.index + 1,
          active: true
        }, (newTab) => {
          // If the current tab is in a group, add the new tab to the same group
          if (currentTab.groupId !== -1) {
            chrome.tabs.group({
              tabIds: newTab.id,
              groupId: currentTab.groupId
            });
          }
        });
      }
    });
  }
});
