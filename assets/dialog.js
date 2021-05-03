window.addEventListener('DOMContentLoaded', () => {

        let send_btn = document.querySelector('.footer_send_btn').addEventListener('click', e => {
            let clickedDetailsList = document.querySelector('.clickedDetailsList');

            if (clickedDetailsList.hasChildNodes()) {
                let formSubmit = document.querySelector('.formSubmit');
                formSubmit.submit();
            } else {
                return false;
            }
        });

        let cancel_btn = document.querySelector('.footer_cancel_btn').addEventListener('click', (e) => {
            //opener.parent.location.reload();
            window.close();
        })


        let reset_btn = document.querySelector('.footer_reset_btn').addEventListener('click', e => {
            let clickedDetailsList = document.querySelector('.clickedDetailsList');

            while (clickedDetailsList.hasChildNodes()) {
                clickedDetailsList.removeChild(clickedDetailsList.firstChild);
            }
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