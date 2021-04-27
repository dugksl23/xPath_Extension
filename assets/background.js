chrome.runtime.onMessage.addListener(function (res) {
    if (res.key === 'popup') {

        chrome.tabs.create({
            url: chrome.extension.getURL('dialog.html'),
            active: true
        }, function (tab) {

            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                type: 'popup',
                focused: true,
                width: 500,
                height: 700,
                // incognito, top, left, ...
            });

            chrome.storage.sync.set({xpath: res.data}, function () {
                console.log('Value is set to ' + value);
            });

        });
        //chrome.tabs.create 로 새창을 연다 .
        //chrome.extension.getURL 로 내가 만들어 둔 html창을 띄워준다.
        //active는 false
    } else {
        chrome.tabs.executeScript({
            file:'assets/getXpathElement.js'
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


