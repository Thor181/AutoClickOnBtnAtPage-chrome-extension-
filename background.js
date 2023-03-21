chrome.tabs.onActivated.addListener((tab) => {

    chrome.scripting.executeScript({
        target: { tabId: tab.tabId },
        files: ["setAll.js"]
      });
});
