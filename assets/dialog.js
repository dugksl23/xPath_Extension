chrome.storage.sync.get('xpath', function (result) {

    //let xpath = JSON.stringify(result);
    document.getElementById('xpath').value = encodeURI(result.xpath);
    console.log('Value currently is ' + result.xpath);

});


document.getElementById('submit').onclick = function () {
    let xpath = document.getElementById('xpath').value;
    location.href = 'http://localhost:8080/insertXpath?xpath=' + xpath;
}