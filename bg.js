browser.browserAction.onClicked.addListener(function () {
    // Toggle login form in the current tab
    browser.tabs.executeScript(null, {
        file: '/mozpwdsaver.js'
    });
});
