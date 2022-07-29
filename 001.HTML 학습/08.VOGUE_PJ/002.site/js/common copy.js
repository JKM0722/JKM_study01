// 보그 PJ 공통 기능 JS - common.js

///////////// 제이쿼리 블록 ///////////////////
$(() => {

    // 호출확인
    console.log("로딩완료!");

    /// 부드러운 스크롤 호출!(제이쿼리 아님!)
    startSS();


    /******************************** 
        페이지 스크롤시 변경 구현하기
        - 이벤트: scroll
        - 제이쿼리 메서드 : scroll()
        - 대상: window
    ********************************/
    let scTop; 

    let topA = $("#top");

    let tbtn = $(".tbtn");

    const scpos = [];

    const scAct = $(".scAct");

    const gap = $(window).height();

    scAct.each((idx, ele) => {scpos[idx] = $(ele).offset().top;}); 

    // 위치배열값 확인!
    console.log(scpos);




    /************************************* 
         함수명: scAction
         기능: 스크롤 등장액션 주기
    *************************************/
    function scAction(n) { 
        if (scTop > scpos[n] - gap && scTop < scpos[n]) 
        {scAct.eq(n).addClass("on");} 
    } /////////// scAction 함수 //////////////

    




    /// 등장요소 위치 업데이트하기 ////////////////
    $(window).resize(() => {
        scAct.each((idx, ele) => scpos[idx] = $(ele).offset().top);
        console.log(scpos);
    }); /////////// resize함수 ///////////////////






    $(window).on("mousewheel wheel",()=>{
        console.log("ㅎㅎㅎ");
    })













    ////////////////////////////////////
    // 윈도우에 스크롤 이벤트 설정하기 ///
    ////////////////////////////////////
    $(window).scroll(function () {

        scTop = $(this).scrollTop();
        if (scTop >= 100) {
            topA.addClass("on");
        } /////// if //////////////

        else {   
            topA.removeClass("on");
        } //////// else ///////////

        // 2. 스크롤 등장액션 주기
        scAct.each((idx) => scAction(idx));

        // 3. 위로가기 버튼 보이기/숨기기
        if (scTop >= 300) { 
            tbtn.addClass("on");
        } ////////// if /////////
        else { 
            tbtn.removeClass("on");
        } ////////// else ////////


    }); ////////// scroll /////////////////


    // 위로가기버튼 클릭시 
    // 맨위로 스크롤 애니메이션하기!
    tbtn.click(() => {

        $("html,body")
            .animate({
                scrollTop: "0"
            }, 800, "easeOutQuart");
            pos = 0; 

    }); ///// click ///////////////


}); /////////////// jQB ///////////////////////