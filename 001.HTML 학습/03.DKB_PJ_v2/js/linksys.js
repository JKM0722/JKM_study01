// 도깨비 PJ 링크시스템 JS - linksys.js

// 제이쿼리 코드구역////////////////////////
$(() => {
    // 실행구역 확인
    console.log("로딩완료");

    // 메뉴 a링크 세팅하기/////////
    // 대상: gnb 밑 a
    // e 변수 -> 이벤트가 발생하는 요소의 이벤트 관련 속성/메서드 전달
    $('.gnb a, .tmenu a').click(function (e) {
        // 기본 이동 막기
        e.preventDefault();

        // 1. 클릭된 텍스트 읽기
        let txt = $(this).text().trim();
        console.log(txt);
        // trim(): 앞뒤 공백 제거

        // 이동 페이지 주소 변수
        let url;

        // 2. 이동버튼에 해당하는 페이지 주소 분기
        switch (txt) {
            case "인물관계도":
                url = "cat";
                break;
            case "시청자 게시판":
                url = "board";
                break;
            case "로그인":
                url = "login";
                break;
            case "회원가입":
                url = "member";
                break;

            case "트위터 바로가기":
                url = "twitter";
                break;
            case "인스타그램 바로가기":
                url = "insta";
                break;
            case "페이스북 바로가기":
                url = "face";
                break;
            default:url="etc";
        } ///////////////switch case////////////


        // 3. 페이지 이동하기
        // location.href = 주소 -> 페이지이동하기
        if(url==="etc") //기타일 경우
            alert("현재 페이지는 오픈 준비중입니다.\n인물관계도, 시청자게시판, 로그인, 회원가입 페이지만 들어가실 수 있습니다.");
        else if(url==="twitter"){
            alert("트위터가 없어서 네이버TV로 연결됩니다");
            window.open().location.href = "http://tvcast.naver.com/cjenm.tvndokebi";
            //window.open() 새창열기
        }
        else if(url==="insta"){
            alert("트위터가 없어서 카카오스토리로 연결됩니다");
            window.open().location.href = "https://story.kakao.com/ch/tvndrama";
            //window.open() 새창열기
        }
        else if(url==="face"){
            alert("페이스북은 로그인이 필요합니다");
            window.open().location.href = "http://www.facebook.com/tvn.dokebi";
            //window.open() 새창열기
        }
        
        else// 이동페이지일경우
            location.href = url+".html";


    }); //////////click


















    /////////////////////////////////////////////
}); ////////////////////JQB///////////////////
/////////////////////////////////////////////

// 참고) 본 파일을 html에서 불러올때 defer속성을 사용하면 
// html이 모두 로딩 후 실행된다.
// 예) <script src="외부JS파일" defer></script>
// 그러나 defer 속성의 누락 등의 위험성이 존재하므로 JS코딩 자체에
// 로딩구역을 만드는게 좋다.