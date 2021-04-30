let html;
let xPathForMouseOver;
let backgroundColor;


try {
    html = document.querySelector('body');
} catch (e) {
    console.log(e);
    console.log(e.error);
    console.log(e.errorDetail);
}

html.addEventListener('mouseover', function (event) {
    event.target.style.zIndex = 100;
    let xPath = getElementByXpath(getXPathOfElement(event.target));
    xPathForMouseOver = xPath;

    try {
        backgroundColor = xPath.style.backgroundColor;
    } catch (e) {
        console.log(e.error);
    }
    getFocusElement(xPath);
})


html.addEventListener('mouseout', function (event) {
    getBackgroundColorOfElement(xPathForMouseOver, backgroundColor);
})

html.addEventListener('click', function (event) {
    getXpath(event);
})
html.addEventListener('dblclick', function (event) {
    return false;
})

function getXpath(event) {
    event.target.style.zIndex = 100;
    console.log("targetNode : ", event.target.tagName);
    console.log("xpath : ", getXPathOfElement(event.target));
    console.log("xpath text :", getElementByXpath(getXPathOfElement(event.target)).innerText);
    let data = [getXPathOfElement(event.target), getElementByXpath(getXPathOfElement(event.target)).innerText]

    chrome.runtime.sendMessage({key: 'popup', data: data});

}

function getXPathOfElement(elt) {
    let path = "";
    for (; elt && elt.nodeType == 1; elt = elt.parentNode) {
        idx = getElementIdx(elt);
        xname = elt.tagName;
        if (idx > 1) xname += "[" + idx + "]";
        path = "/" + xname + path;
    }
    return path.toLowerCase();
}

function getElementIdx(elt) {
    let count = 1;
    for (var sib = elt.previousSibling; sib; sib = sib.previousSibling) {
        if (sib.nodeType == 1 && sib.tagName == elt.tagName) count++
    }
    return count;
}

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

function getFocusElement(xPath) {
    xPath.style.backgroundColor = '#FFFAF0';
}

function getBackgroundColorOfElement(xPath, color) {
    xPath.style.backgroundColor = color;
}

