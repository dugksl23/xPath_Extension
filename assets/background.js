let childWindow;
let titleList = [];
let xPathList = [];

chrome.runtime.onMessage.addListener(function (res, sender, callback) {
    if (res.key === 'popup') {
        childWindow = window.open('/dialog.html', "PopupWin", "width=500,height=600");

    } else if (res.key === 'xPath') {
        setValueOfTitleAndXpath(res.data[0], res.data[1]);
        callback(res.key);
    }
});


function setValueOfTitleAndXpath(xPath, title) {

    xPathList.push(xPath);
    titleList.push(title);
    let clickedDetailsList = childWindow.document.querySelector('.clickedDetailsList');
    let clickedDetailBox;
    for (let i = 0; i <= xPathList.length; i++) {

        clickedDetailBox = document.createElement('div')
        clickedDetailBox.setAttribute('class', 'clickedDetailBox');
        clickedDetailBox.setAttribute('id', 'clickedDetailBox' + i);

        let inputTagForExtra = document.createElement('input');
        inputTagForExtra.setAttribute('class', 'extra');

        let inputTagForTitle = document.createElement('input');
        inputTagForTitle.setAttribute('class', 'title');
        inputTagForTitle.value = title;

        let inputTagForXpath = document.createElement('input');
        inputTagForXpath.setAttribute('class', 'xPath');
        inputTagForXpath.setAttribute('name', `xPathList[${i - 1}].xPath`);

        inputTagForXpath.value = xPath;

        let cancel_btn = document.createElement('input');
        cancel_btn.setAttribute('class', 'clickedDetailBox_cancel_btn');
        cancel_btn.setAttribute('type', 'button');
        cancel_btn.setAttribute('value', 'cancel');

        clickedDetailBox.appendChild(inputTagForExtra);
        clickedDetailBox.appendChild(inputTagForTitle);
        clickedDetailBox.appendChild(inputTagForXpath);
        clickedDetailBox.appendChild(cancel_btn);

    }
    clickedDetailsList.append(clickedDetailBox);

    let cancel_buttons = childWindow.document.querySelectorAll(".clickedDetailBox_cancel_btn");
    for (const button of cancel_buttons) {
        button.addEventListener('click', (event) => {
            event.target.closest('div.clickedDetailBox').remove();
        })
    }
}


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
//
//chrome.storage.sync.set({
//     xPath: encodeURI(res.data[0]),
//     title: encodeURI(res.data[1]),
//     xPathList: xPathList
// });