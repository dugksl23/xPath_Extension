window.addEventListener('DOMContentLoaded', () => {

    chrome.storage.sync.get(['xPath', 'title'], (e) => {
        try {

            alert(e.xPathList);//1.for문을 통한 xpathList를 script로 table을 구성? / 2. openee에서 결정.
            document.querySelector('.xPath').value = encodeURI(e.xPath);
            document.querySelector('.title').value = encodeURI(e.title);
        } catch (err) {
            console.log("비동기 실패");
        }

    });

    document.querySelector('.footer_send_btn').addEventListener('click', () => {
        try {
            let xpath = document.querySelector('#xpath').value;
            location.href = 'http://localhost:8080/insertXpath?xpath=' + xpath;
        } catch (err) {
            console.log(err);
            console.log("실패");
        }
    });

    document.querySelector('.xPathList_cancel_btn').addEventListener('click', (e) => {
        console.log(e.target.tagName);
        e.target.closest('div.xPathList').remove();
    })

    document.querySelector('.footer_cancel_btn').addEventListener('click', (e) => {
        window.close();
    })
});


// ==> dom 생성 -> document.ready 메소드 실행 -> 각 태그(요소)들이 load -> window.onload() 실행;
