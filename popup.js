document.getElementById("getTitleBtn").addEventListener("click", () => {
    
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      const title = activeTab.title;
      
      document.getElementById("titleDisplay").textContent = title;
    });
  });
  