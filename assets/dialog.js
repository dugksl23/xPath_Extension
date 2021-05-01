window.addEventListener('DOMContentLoaded', () => {


        let cancel_buttons = document.querySelectorAll(".clickedDetailBox_cancel_btn");
        for (const button of cancel_buttons) {
            button.addEventListener('click', function (event) {
                event.target.closest('div.clickedDetailBox').remove();

            })
        }

        try {
            document.querySelector('.footer_send_btn').addEventListener('click', () => {
                let xPath = document.querySelector('.xPath').value;
                location.href = 'http://localhost:8080/insertXpath?xpath=' + xPath;

                console.log(err);
                console.log("실패");
            });

        } catch (err) {

        }


        document.querySelector('.footer_cancel_btn').addEventListener('click', (e) => {
            window.opener.location.reload();
            window.close();

        })
    }
);


// ==> dom 생성 -> document.ready 메소드 실행 -> 각 태그(요소)들이 load -> window.onload() 실행;


// chrome.storage.sync.get(['xPath', 'title'], (e) => {
//     try {
//         document.querySelector('.xPath').value = e.xPath;
//         document.querySelector('.title').value = e.title;
//     } catch (err) {
//         console.log("비동기 실패");
//     }
//
// });