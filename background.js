
browser.contextMenus.create({
  id: "log-selection",
  title: 'Re-Name Tab',
  contexts: ["tab"]
});

browser.contextMenus.onClicked.addListener(function(info, tab) {
    browser.tabs.update(tab.id,{
        active: true
    });
    browser.tabs.executeScript(
        tab.id,{
            file: '/rename.js'
    });
});
