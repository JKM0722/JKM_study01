// 보그PJ링크시스템 JS - linksys.js//////////////////

$(()=>{////////// JQB

    // 로고 클릭시 첫페이지 이동
    $('.logo a').click(()=>location.href='index.html');

    // GNB 링크 세팅 ////////////////////
    // 대상: .gnb a
    $('.gnb a').click(function(e){
        // a기본이동 막기
        e.preventDefault();

        // 3. 클릭된 a요소의 글자읽기
        let txt = $(this).text().toLowerCase().trim();
        // toLowerCase() 소문자 변환
        // 참고) toUpperCase() 대문자 변환
        //trim() 앞뒤 공백 제거
        console.log(txt);

        //2. 서브페이지 이동하기
        if(txt!=="search")
            location.href = 'category.html?cat=' + txt;
            encodeURIComponent(txt);

        // 카테고리를 구분하기 위한 파라미터 키=값 쌍을 보냄
        // cat=카테고리명
        // 이것을 받아서 페이지 셋업을 한다
        // 이렇게 데이터를 url로 전달하는 방식을 GET방식 이라고 한다.
        // 특수문자가 있으므로 (timf & gem) 이것을 보낼때
        // encodeURIComponent()로 변환하여 보내고
        // 받는곳에서는 decodeURIComponent()로 복원한다.
        
    });//////////click



}); ///////////////// JQB