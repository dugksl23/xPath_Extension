let html = document.querySelector('body');

html.addEventListener('click', function (event) {
    alert('클릭 된 시점입니다.');
    event.target.style.zIndex = 10;
    console.log("targetNode : ", event.target.tagName);
    console.log("xpath : ", getXPathOfElement(event.target));

    chrome.runtime.sendMessage({key: 'popup', data: getXPathOfElement(event.target)}, response => {
        console.log(response);
    });
})


function getXPathOfElement(elt) {
    var path = "";
    for (; elt && elt.nodeType == 1; elt = elt.parentNode) {
        idx = getElementIdx(elt);
        xname = elt.tagName;
        if (idx > 1) xname += "[" + idx + "]";
        path = "/" + xname + path;
    }
    return path.toLowerCase();
}

function getElementIdx(elt) {
    var count = 1;
    for (var sib = elt.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.nodeType == 1 && sib.tagName == elt.tagName) count++
    }
    return count;
}



