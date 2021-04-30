let xPathList = [];
let popupWindow;

chrome.runtime.onMessage.addListener((res) => {
    if (res.key === 'popup') {

        // 새창을 유지시키기 위한 로직.
        // chrome.windows.getAll({populate: true}, function (e) {
        //     if (e.length < 2) {
        //         chrome.tabs.create({
        //             url: chrome.extension.getURL('dialog.html'),
        //             active: true
        //         }, function (tab) {
        //
        //             popupWindow = tab.id;
        //             // After the tab has been created, open a window to inject the tab
        //             //chrome.tabs.create 로 새창.
        //             //chrome.extension.getURL로 html창을 load.
        //             chrome.windows.create({
        //                 tabId: tab.id,
        //                 type: 'popup',
        //                 focused: true,
        //                 width: 500,
        //                 height: 700,
        //                 // incognito, top, left, ...
        //             });
        //         });
        //     }
        // });

        xPathList.push(res.data[0]);
        let childWindow = window.open('/dialog.html', "PopupWin", "width=500,height=600");
        //childWindow.document.querySelector('.xPath').value = res.data[0];
        chrome.storage.sync.set({xPath: res.data[0], title: res.data[1], xPathList: xPathList}, result => {

        });
    }
});
