document.querySelector('#start').addEventListener('click', (e) => {
    executeScript()
    chrome.runtime.sendMessage({key: 'popup'});
})


document.querySelector('#stop').addEventListener('click', (e) => {
    //클릭 이벤트를 통한 xpath 취득 및 db 적재용 js를 Injection.
    chrome.tabs.executeScript({
        code: `window.location.reload();`
    })
    window.close();
});

function executeScript() {
    chrome.tabs.executeScript({
        code: `document.onclick = (e) => {
                    return false;
                }`
    });

    //클릭 이벤트를 통한 xpath 취득 및 db 적재용 js를 Injection.
    chrome.tabs.executeScript({
        file: 'assets/getXpathElement.js'
    });

    window.close();
}