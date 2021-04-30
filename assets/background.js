let xPathList = [];
let popupWindow;

chrome.runtime.onMessage.addListener((res) => {
    if (res.key === 'popup') {

        // 새창을 유지시키기 위한 로직.
        chrome.windows.getAll({populate: true}, function (e) {
            if (e.length < 2) {
                chrome.tabs.create({
                    url: chrome.extension.getURL('dialog.html'),
                    active: true
                }, function (tab) {
                    popupWindow = tab.id;
                    // After the tab has been created, open a window to inject the tab
                    //chrome.tabs.create 로 새창.
                    //chrome.extension.getURL로 html창을 load.
                    chrome.windows.create({
                        tabId: tab.id,
                        type: 'popup',
                        focused: true,
                        width: 500,
                        height: 700,
                        // incognito, top, left, ...
                    });
                });
            }
        });

        chrome.storage.sync.set({xPath: res.data[0], title: res.data[1]}, (e) => {

        });
    }
});

//현재 이 로직은 popup을 대상으로만 하여 body를 가져온다.
function loadScript() {
    let head = document.querySelector('head');
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = chrome.extension.getURL('assets/getXpathElement.js');
    head.appendChild(script);
    someFunctionFromMySuperScript();
}





