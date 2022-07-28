// 쇼핑몰 배너 JS - 03.페이드효과 //


/////////// 제이쿼리 로딩구역/////////////////////////////////////////////////////////////
$(()=>{

    // 호출확인
    console.log("로딩완료");





    /******************************************************************************* 
        [ 페이드 배너 요구사항 ]
        1. 오른쪽 버튼 클릭시 다음슬라이드가 보임

        2. 왼쪽 버튼 클릭시 이전 슬라이드가 보임

        3. 모든 배너는 무한이동을 원칙으로 한다.

        4. 배너 이동 시 배너의 순번을 블릿으로 표시한다.

        5. 자동 넘김이 세팅되어 있으며 사용자가 조작시 자동넘김이 멈춰지고 
        일정시간 놔두면 다시 자동넘김 활성화

    *******************************************************************************/

        // 이벤트 대상 : .abtn
        // 이벤트 : click() 메서드 사용
        // 양쪽버튼 구분 : .ab1(왼쪽 버튼) / .ab2(오른쪽 버튼)
        // 변경대상 :slide의 top값을 이동하여 애니메이션함
        let slide = $("#slide li") // li 까지 선택한다
        // 변경에 사용할 제이쿼리 메서드 : animate({CSS속성}, 시간, 이징, 함수)

        // 변경대상 : 블릿 - .indic li
        let indic = $(".indic li")

        // 광클 금지변수
        let prot = 0; // 1- 불허용, 0- 허용

        // 애니메이션 시간 변수
        const aniT = 600;

        // 애니메이션 이징 변수
        const aniE = "easeOutExpo";

        // 페이드기능을 위한 초기화 설정
        // 슬라이드 li가 하나만 빼고 모두 불필요
        // display:none 처리함 -> hide()
        slide.hide().first().show();
        // 슬라이드 li.다숨겨().첫번쨰().보여

        // 현재 슬라이드 순번 변수
        let sno = 0;

        $(".abtn").click(function(){

            // console.log("진입:", prot);

            ////광클 금지/////
            if(prot) return;
            prot = 1;//잠금
            setTimeout(()=>prot=0,aniT)
            // .6초후 prot=0 잠금해제


            // console.log("통과:", prot);

            // 자동넘김 지우기 함수 호출
            clearAuto();
            
            // 오른쪽 여부
            // is(클래스/아이디명) -> 선택요소해당여부 리턴 
            let isR = $(this).is(".ab2");


            // 호출확인(방향확인)
            console.log("오른쪽버튼인가?", isR)

   

            if (isR){//////오른쪽버튼

                // fadeIn으로 다음순번 보이기
                // eq(순번)

                // 현재슬라이드 숨기기
                slide.eq(sno).fadeOut(aniT);
                // 슬라이드 순번 1증가
                sno++; 
                //슬라이드 한계값 체크 처음으로 변경
                console.log(slide.length)
                if(sno===slide.length) sno=0; 
                console.log("현재슬번", sno)
                slide.eq(sno).fadeIn(aniT);
                

            }/////////////////if


            else{/////////////아래쪽버튼

                 // 현재슬라이드 숨기기
                 slide.eq(sno).fadeOut(aniT);
                 // 슬라이드 순번 1증가
                 sno--; 
                 console.log(-slide.length)
                if(sno===-1) sno=4; 
                console.log("현재슬번", sno)
                slide.eq(sno).fadeIn(aniT);

            }///////////////else///////

            // 3. 등장 슬라이드와 같은 순번의 블릿 변경하기
            // 현재 슬라이드 번호(sno)와 같은 순번의 클래스 on
           indic.eq(sno).addClass("on")
           // 다른 형제들 블릿 클래스 제거
           .siblings().removeClass("on");

        });/////////click///////////////



        // 배너 자동호출 넘기기 세팅 ///////
        // 인터발함수 : setInterval(함수,시간)
        // 인터발 지우기 함수 : clearInterval(변수)
        // 타임아웃함수 : setTimeout(함수, 시간)        
        // 타임아웃 지우기 함수 : clearTimeout
        // 타이밍 함수는 변수에 할당해야 지울 수 있다.
        
        // 인터발용 변수
        let autoI;

        // 타임아웃용 변수
        let autoT;

        //인터발 최초호출
        // autoSlide();

        // 인터발 호출함수
        function autoSlide(){
            autoI = setInterval(()=>{
                slide.eq(sno).fadeOut(aniT);
                sno++; 
                console.log(slide.length);
                if(sno===slide.length) sno=0; 
                console.log("현재슬번", sno);
                slide.eq(sno).fadeIn(aniT);
                indic.eq(sno).addClass("on").siblings().removeClass("on");
            },3000)
        }/////autoSlide 함수

        //// 인터발 지우기 함수 //////////////
        function clearAuto(){
            //인터발 지우기
            clearInterval(autoI);
            // 타임아웃지우기(실행 쓰나미 방지)
            clearTimeout(autoT);

            //일정시간 후 다시 인터발 불러오기
            autoT = setTimeout(autoSlide,4000);
        };


         










        // 근본적 해결 소스 아님/////////////////////
        /* setInterval(() => {
            $(".ab2").trigger("click")
        }, 4000); */
        // 제이쿼리 trigger(이벤트명) 메서드
        // -> 선택요소에 강제 이벤트 발생 메서드











////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
});///////////////////////////////////////////////////////////////////////////////
//////////JQB////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////


