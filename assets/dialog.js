window.addEventListener('DOMContentLoaded', () => {

    chrome.storage.sync.get(['xPath','title'], (e) => {
        try {
            document.querySelector('.xPath').value = encodeURI(e.xPath);
            document.querySelector('.title').value = encodeURI(e.title);

        } catch (err) {
            console.log("비동기 실패");
        }

    });

    document.querySelector('#send_btn').addEventListener('click', () => {
        try {
            let xpath = document.querySelector('#xpath').value;
            location.href = 'http://localhost:8080/insertXpath?xpath=' + xpath;
        } catch (err) {
            console.log(err);
            console.log("실패");
        }
    });

    document.querySelector('.cancel_btn').addEventListener('click', (e) => {
        console.log(e.target.tagName);
        e.target.closest('div.xPathList').remove();
    })

});

// ==> dom 생성 -> document.ready 메소드 실행 -> 각 태그(요소)들이 load -> window.onload() 실행;
