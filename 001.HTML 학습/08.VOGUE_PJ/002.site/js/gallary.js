// gallary.js

$(()=>{

    //스와이퍼 설정
    var swiper = new Swiper(".mySwiper", {

        // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 200px
            200: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            // when window width is >= 700px
            700: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        },
        
        slidesPerGroup: 1, // 한번에 넘어가는 그룹 수
        loop: true, // 무한루프
        loopFillGroupWithBlank: true,
        //한화면 단위 지정시 단위보다 그룹이 작을경우 빈칸으로 채움
        pagination: {
          el: ".swiper-pagination", // 블릿 설정
          clickable: true, // 불릿 클릭 이동 가능
        },
        navigation: {
          nextEl: ".swiper-button-next", // 다음버튼
          prevEl: ".swiper-button-prev", // 이전버튼
        },
        autoplay:{ // 자동넘김
            delay:5000, // 시간간격
            disableOnInteraction: false, // 상호작용이 없으면 다시 재시작
        }
      });

})///JQB