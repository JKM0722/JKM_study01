// 제이쿼리 기본 JS - main.js 

// 제이쿼리 코드블록 //////////////
$(() => {

            // 0. 주인공들 변수할당하기
            // (1) 미니언즈 
            let mi = $(".mi");

            // (2) 건물 li
            let bd = $(".building li");

            // (3) 버튼들
            let btns = $(".btns button");

            // (4) 메시지박스
            let msg = $(".msg")

            // 1. 건물에 각방 번호 넣기

            bd.each((idx, ele) => { // idx-순번, ele-요소
                // text() 텍스트 넣기
                $(ele).text(idx);

                // 9번방에 좀비넣기
                if (idx === 9)
                    $(ele).append('<img src="images/mz1.png" alt="좀비1" class="mz">')
                else if (idx === 7)
                    $(ele).append('<img src="images/mz2.png" alt="좀비2" class="mz">')
                else if (idx === 1)
                    $(ele).append('<img src="images/zom.png" alt="좀비들" class="mz">')
                else if (idx === 2)
                    $(ele).append('<img src="images/inj.png" alt="주사기" class="inj">')

            }); /////////////////// each ///////////////////

            // 좀비는 모두 숨기기 : hide()
            $(".mz").hide()


            // 2. 버튼 셋팅하기
            // 모든 버튼은 숨기고 첫번째 버튼만 보여

            // 버튼.숨겨().첫번째().보여()
            btns.hide().first().show();

            // 3. 공통 구현 함수 만들기
            // 각 스텝에서 미니언즈가 할 공통 기능 함수 구현
            const actMini = (ele, seq, fn) => {
                // ele - 버튼자신
                // seq - 이동할 li 순번
                // fn - 이동 후 실행함수


                // 0. 버튼자신 없애기!
                // 없애기 방법: hide(), slideUp(), fadeOut()
                $(ele).slideUp(300);
                // + 메시지 없애기
                msg.hide();
                // console.log(ele,seq,fn)
                // 1. 위치값 알아오기(대상:빌딩 li)
                // 8번째 li
                // eq(순번) -> 순번요소 선택 메서드!
                let tg = bd.eq(seq)
                let tval = tg.offset().top;
                let lval = tg.offset().left+tg.width()/2-mi.width()/2;
                // left 위치 보정으로 미니언즈 li의 중앙위치
                // 계산 : left위치 + li 가로 절반 - 미니언즈 가로 절반

                // offset() 메서드 - 요소셋팅값(위치, 크기)
                // top, left, width, height 속성값 사용!
                // width(),height()메서드로 바로 가로,세로크기 구함

                // 2. 위치이동(이동대상:미니언즈)
                mi.animate({
                    top: tval + "px",
                    left: lval + "px"
                }, 1000, "easeInOutElastic", fn)

            }; //////////////actMini 함수/////////////////////
            ////////////////////////////////////////////////

            // 4. "들어가기" 버튼 클릭시
            btns.first().click(function () {
                    // 이동후 함수
                    let fn = () => {
                        // 메시지 변경하기
                        msg
                            .text('와~! 아늑하다! 옆방으로 가보자!')
                            .show();
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }; //////////////fn///////////////

                    // 공통 기능구현 
                    actMini(this, 8, fn);

                }) /////////// 들어가기 click ///////////////



                // 5. "옆방으로" 버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        // 좀비나타나기 함수
                        bd.eq(9).find('.mz').delay(2000).fadeIn(400, 
                        ()=>{//// 좀비나온후
                            //메시지
                            msg.html(`
                            악!;;; 좀비! <br> 어서피하자!
                            `).css({left:"-154%"}).fadeIn(200)
                            // 다음버튼 보이기
                            $(this).next().fadeIn(300);
                        })


                        
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 9, fn);
                    }) /////////// 옆방으로 click ///////////////


                // 6. 윗방 버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        // 메시지 보이기
                        msg.html(`여긴없겠지?`)
                        .fadeIn(200)
                        
                        // 좀비 보이기
                        bd.eq(7).find(".mz").delay(1000).fadeIn(400, ()=>{
                            // 메시지 변경하기
                            msg.html(`악! 여기도!!!`)

                            // 다음버튼 보이기
                            $(this).next().fadeIn(300);

                        })


                    }
                       
                        // 공통 기능구현 
                        actMini(this, 7, fn);
                    }) /////////// 윗방 click ///////////////


                // 7. 다시 옆방 버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 6, fn);
                    }) /////////// 다시 옆방 click ///////////////

                // 8. 무서우니 윗층으로  버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 4, fn);
                    }) /////////// 무서우니 윗층으로 click ///////////////

                // 9. 치료주사방으로  버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 2, fn);
                    }) /////////// 치료주사방으로 윗층으로 click ///////////////

                // 10. 3번방으로  버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 3, fn);
                    }) /////////// 3번방으로 click ///////////////

                // 11. 1번방으로  버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 1, fn);
                    }) /////////// 1번방으로 click ///////////////

                // 12. 헬기를호출  버튼 클릭시 
                .next().click(function () {
                    // 이동후 함수
                    let fn = () => {

                        
                        // 다음버튼 보이기
                        $(this).next().fadeIn(300);
                    }
                       
                        // 공통 기능구현 
                        actMini(this, 0, fn);
                    }) /////////// 헬기를호출ㄴ click ///////////////






















            }); ////////////////////// jQB /////////////////