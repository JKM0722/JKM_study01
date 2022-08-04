// 보그PJ링크시스템 JS - linksys.js//////////////////

$(() => { ////////// JQB

    /*************************************************** 
        로그인, 회원가입, 갤러리 아이콘 넣기
    ***************************************************/
    // 대상:  .sns a:last-child (마지막 카스링크)
    // 변경: 대상요소 앞에 a요소 코드를 삽입한다.
    // 메서드 : before(요소) -> 선택요소 앞에 형제요소 삽입
    // -> 참고) after(요소) -> 선택요소 뒤에 형제요소 삽입
    $(".sns a").last().before(`
   <a class="fi fi-laptop">
       <span class="ir">
           로그인
       </span>
   </a>
   <a class="fi fi-user-secret">
       <span class="ir">
           회원가입
       </span>
   </a>
   <a class="fi fi-camera">
       <span class="ir">
           갤러리
       </span>
   </a>
  `)


    /* sns 파트 a 요소들에 툴팁 넣기 */

    $('.sns a').each((idx, ele) => {
        // attr(속성명, 값)
        // -> 값으로 자식요소인 .ir의 텍스트 읽어감
        $(ele).attr("title", $(ele).find('.ir').text())
    }) /////each////////////////////////////////

    // 선택메서드 비교
    // find(요소) - 자손선택
    // children(요소) - 직계자손선택


    /****************************************** 
        sns 메뉴 파트 링크 생성하기
    ******************************************/
    $('.sns a').click(function (e) {

        // a 요소 기본이동 막기
        e.preventDefault();
        // js의 return false와 효과 동일
        // 단 return false는 코드 맨 아래 위치

        // 1. 클릭된 a 요소의 텍스트 읽기
        let atxt = $(this).text().trim();
        console.log(atxt);


        // 2. 이동할 페이지 주소 할당하기
        let url;
        switch (atxt) {
            case "인스타그램":
                url = "https://www.instagram.com/VOGUEKOREA/";
                break;
            case "페이스북":
                url = "https://www.facebook.com/VOGUEkr";
                break;
            case "트위터":
                url = "http://twitter.com/VogueKorea";
                break;
            case "유튜브":
                url = "http://www.youtube.com/user/VogueKorea";
                break;
            case "로그인":
                url = "login.html";
                break;
            case "회원가입":
                url = "member.html";
                break;
            case "갤러리":
                url = "gallary.html";
                break;
            case "카카오스토리":
                url = "http://story.kakao.com/ch/voguekr";
                break;
        }///////////////switch case ///////

        // 3. 페이지 이동하기
        if(atxt==="로그인"||atxt==="회원가입"||atxt==="갤러리")
            location.href = url
        else// 기타 sns는 새창열기로
            window.open().location.href = url
    }) ////////////click////////////////



    /****************************************** 
     메인로고 링크 생성하기
     ******************************************/
    $('.logo a').click(() => location.href = 'index.html');





    /****************************************** 
        GNB 메뉴 파트 링크 생성하기
    ******************************************/
    // 대상: .gnb a
    $('.gnb a').click(function (e) {
        // a기본이동 막기
        e.preventDefault();

        // 3. 클릭된 a요소의 글자읽기
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자 변환
        // 참고) toUpperCase() 대문자 변환
        //trim() 앞뒤 공백 제거
        console.log("txt", txt);

        //2. 서브페이지 이동하기
        if (txt !== "search")
            location.href = 'category.html?cat=' + txt;
        encodeURIComponent(txt);

        // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
        // cat=카테고리명
        // 이것을 받아서 페이지 셋업을 한다
        // 이렇게 데이터를 url로 전달하는 방식을 GET방식 이라고 한다.
        // 특수문자가 있으므로 (timf & gem) 이것을 보낼때
        // encodeURIComponent()로 변환하여 보내고
        // 받는곳에서는 decodeURIComponent()로 복원한다.

    }); //////////click



}); ///////////////// JQB