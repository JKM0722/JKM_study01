// 보그 PJ 회원가입 페이지 JS - member.js

/////// 제이쿼리 코드블럭 //////////////////
$(() => {

    // 로딩완료
    console.log('로딩완료');

    /**************************************** 
        [ 사용자 입력폼 유효성 검사 ]
        - 이벤트 종류: blur (포커스가 빠질때 발생)
        - 제이쿼리 이벤트 메서드 : blur()
        - 이벤트 대상:

        -> id가 'email2'가 아니고 class가 'search'가
        아닌 type이 'text'인 입력요소 input

        >>> 제이쿼리 선택표현법:
        input[type=text][id!=email2][class!=search]
        >>> 대괄호는 속성선택자, != 같지않다(제이쿼리전용)

        -> type이 'password'인 입력요소 input

        >>> 제이쿼리 선택표현법:
        input[type=password]
    
    ****************************************/
    $(`input[type=text][id!=email2][class!=search],
   input[type=password]`)
        .blur(function () {

            /// 모든공백 처리함수 /////
            const groSpace = cv => cv.replace(/\s/g, '');
            // groSpace는 get rid of Space 즉, 공백제거라는 말
            // cv => {return cv.replace(/\s/g, '');}
            // 정규식: 슬래쉬(/) 사이에 표현함, \s 스페이스문자
            // g는 모두 찾으라는 global(전역) 플래그문자임 
            // flag는 깃발이라는 영단어임. 즉 정규식 표시자문법
            // 참고) https://www.w3schools.com/js/js_regexp.asp

            // 1. 방금 블러가 발생한 요소의 id는?
            let cid = $(this).attr('id');
            // cid는 current id 즉, 현재아이디라는 뜻

            // 2. 블러가 발생한 요소의 입력값은?
            let cv = $(this).val().trim();
            // cv는 current value 즉, 현재값이라는 뜻

            // "이름"일 경우 앞뒤공백만 제거함 : trim()
            if (cid === 'mnm') cv = cv.trim();
            // 기타인 경우 모든 공백제거처리! : groSpace()
            else cv = groSpace(cv);

            console.log('블러발생!', cid, '/', cv);

            // 제거된 공백문자로 입력창에 다시 출력하기
            $(this).val(cv);


            /*************************************** 
                3. 빈값 여부 체크하기
            ***************************************/
            if (cv === "") {
                // 메시지 출력
                $(this).siblings('.msg')
                    .text('필수입력!')
                    .removeClass('on'); // 녹색글자지움
                // .msg박스는 input요소의 형제요소임
                // siblings(요소) - 다른형제요소 중 특정요소선택
                // siblings() 아무값도 안쓰면 다른형제요소 모두선택

                // 불통과!
                pass = false;

            } /////////// if : 빈값체크 ///////////////

            /******************************************************* 
                 4. 아이디일 경우 유효성 검사하기
                 - 검사기준 : 영문자로 시작하는 6~20글자 영문자/숫자
            *******************************************************/
            else if (cid === 'mid') {
                // console.log('검사결과:',vReg(cv,cid));
                if (!vReg(cv, cid)) { // 불통과일경우!
                    // !(NOT연산자) -> false일때 if문으로 들어옴!

                    // 메시지 띄우기
                    $(this).siblings('.msg')
                        .text('영문자로 시작하는 6~20글자 영문자/숫자')
                        .removeClass('on'); // 녹색글자지움


                    // 불통과!
                    pass = false;

                } /////////// if : 아이디검사 불통과 ///////
                else { //// 검사결과가 통과이면 //////
                    /***************************** 
                        [ Ajax로 중복아이디 검사하기 ]
                        ajax 처리유형 2가지
                        _____________________________

                        1) post 방식 처리 메서드
                        -> $.post(UTL,data,callback)

                        2) get 방식 처리 메서드
                        -> $.get(URL,callbak)
                        -> URL에 데이터가 키, 값 쌍으로 감

                        3) 위의 2가지 유형 중 선택처리 메서드
                        -> $.ajax({
                            1. 전송할페이지,
                            2. 전송방식,
                            3. 보낼 데이터,
                            4. 전송할데이터 타입,
                            5. 비동기 옵션,
                            6. 성공처리,
                            7. 실패처리
                        })
                        
                    *****************************/
                    $.ajax({
                        // 1. 전송할페이지
                        url: "process/chkID.php",
                        // 2. 전송방식
                        type: "post",
                        // 3. 보낼 데이터
                        data: {
                            "mid": $("#mid").val()
                        },
                        // 4. 전송할데이터 타입
                        dataType: "html",
                        // 5. 비동기 옵션
                        // 비동기 옵션을 꺼야(false) 전역변수 pass에
                        // 업데이트가 가능
                        async: false,
                        // 6. 성공처리
                        success: function (res) {
                            console.log("결과:", res)
                            if (res === "ok") { //사용가능
                                // 성공메시지출력
                                $("#mid").siblings('.msg')
                                    .text('훌륭한 아이디네요~!')
                                    .addClass('on'); // 녹색글자
                            } //if문//
                            else { //사용불가//
                                // 사용불가메시지출력
                                $("#mid").siblings('.msg')
                                    .text('사용중인 ID입니다')
                                    .removeClass('on'); // 빨간색 글자

                                //불통과!!(꼭 해야한다)
                                pass = false;
                            } //사용불가////
                        },
                        // 7. 실패처리
                        // xhr - XMLRequest 객체
                        // status - 실패상태 코드번호
                        // error - 에러 결과 메시지
                        error: function (xhr, status, error) {
                            alery('연결실행실패:', error)
                        } ///error
                    }); /////////ajax////////////////////////////////




                } /////////// else : 아이디검사결과 통과 ///////


            } //////////// else if : 아이디검사 ///////////////

            /******************************************************* 
                 5. 비밀번호일 경우 유효성 검사하기
                 - 검사기준 : 특수문자,문자,숫자포함 형태의 5~15자리
            *******************************************************/
            else if (cid === 'mpw') {
                // console.log('검사결과:',vReg(cv,cid));
                if (!vReg(cv, cid)) { // 불통과일경우!
                    // !(NOT연산자) -> false일때 if문으로 들어옴!

                    // 메시지 띄우기
                    $(this).siblings('.msg')
                        .text('특수문자,문자,숫자포함 형태의 5~15자리');

                    // 불통과!
                    pass = false;

                } /////////// if : 비밀번호검사 불통과 ///////
                else { //// 검사결과가 통과이면 //////

                    // 메시지 지우기
                    $(this).siblings('.msg').empty();
                    // empty() 선택요소의 텍스트를 지움

                } /////////// else : 비밀번호검사결과 통과 ///////


            } //////////// else if : 비밀번호검사 ///////////////

            /******************************************************* 
                 6. 비밀번호확인일 경우 유효성 검사하기
                 - 검사기준 : 입력된 비밀번호와 일치여부
            *******************************************************/
            else if (cid === 'mpw2') {

                // 비밀번호확인값과 비밀번호값이 같지 않으면
                if (cv !== $('#mpw').val()) { // !== 같지않으면

                    // 메시지 띄우기
                    $(this).siblings('.msg')
                        .text('비밀번호가 일치하지 않습니다!');

                    // 불통과!
                    pass = false;

                } /////////// if : 비밀번호확인검사 불통과 ///////
                else { //// 검사결과가 통과이면 //////

                    // 메시지 지우기
                    $(this).siblings('.msg').empty();
                    // empty() 선택요소의 텍스트를 지움

                } /////////// else : 비밀번호확인검사결과 통과 ///////


            } //////////// else if : 비밀번호확인검사 ///////////////

            /******************************************************* 
                  7. 이메일 입력할때 검사하기
                  - 검사기준 : 이메일 형식에 맞는지 여부검사
             *******************************************************/
            else if (cid === 'email1') {

                // 이메일 주소 만들기 : 앞주소@뒷주소
                let comp = eml1.val() + '@' +
                    (seleml.val() === 'free' ? eml2.val() : seleml.val());
                // (비?집:놀이동산)
                // 선택박스의 값이 '직접입력'일 경우(free)
                // 이메일 뒷주소 입력창값을 읽어가고
                // 아니면 선택박스 값을 넣는다!
                console.log('이메일주소:', comp);

                // 이메일 검사함수 호출하기!
                resEml(comp);


            } //////////////// else if : 이메일검사 //////////////


            ///////////// 만약 통과시 메시지 지우기 //////////////
            else {
                // 메시지 지우기
                $(this).siblings('.msg').empty();
            } //////////// else : 통과시 ///////////////////


        }); ///////////////// blur ///////////////////////
    //////////////////////////////////////////////////

    //////// 이메일 관련 대상선정 ///////////
    // 이메일 앞주소
    let eml1 = $('#email1');
    // 이메일 뒷주소
    let eml2 = $('#email2');
    // 이메일 선택박스
    let seleml = $('#seleml');
    /////////////////////////////////////////


    /********************************************* 
         선택박스 변경시 이메일 검사하기
         _____________________________

         검사시점: 선택박스 변경할때
         이벤트 : change -> 제이쿼리 change() 메서드
         이벤트 대상: #seleml -> seleml변수

    *********************************************/
    seleml.change(function () {
        // 1. 선택박스 변경된 값 읽어오기
        let cv = $(this).val();
        console.log('선택값:', cv);

        // 2. 선택옵션별 분기문
        if (cv === 'init') { // "선택해주세요"

            // 1. 메시지 출력
            eml1.siblings('.msg')
                .text('이메일 옵션 선택필수!')
                .removeClass('on');

            // 2. 직접입력창 숨기기
            eml2.fadeOut(300);

        } /////// if : 선택해주세요 /////////
        else if (cv === 'free') { // "직접입력"

            // 1. 직접입력창 보이기
            eml2.fadeIn(300).val("").focus();
            // val(값) ->  입력창에 값넣기(빈값은 비우기)
            // focus() -> 입력창에 포커스(커서깜박임!)

            // 2. 메시지 지우기
            eml1.siblings('.msg').empty();


        } //////// else if : 직접입력 //////////
        else { // 기타 이메일 주소 선택시 ///////

            // 1. 직접입력창 숨기기
            eml2.fadeOut(300);

            // 2. 이메일 전체주소 조합하기
            let comp = eml1.val() + '@' + cv;
            // cv는 select의 선택옵션값

            // 3. 이메일 검사함수 호출하기
            resEml(comp);


        } ///////// else : 기타 이메일주소 ////////

    }); ///////////// change /////////////////////
    ///////////////////////////////////////////////

    /******************************************** 
        키보드 입력시 이메일 체크하기
        ____________________________

        - 키보드 관련 이벤트 : keypress, keyup, keydown
        1. keypress : 키가 눌렸을때
        2. keyup : 키가 눌렸다가 올라올때
        3. keydown : 키가 눌려져서 내려가있을때
        -> 과연 글자가 입력되는 순간은 어떤 키보드 이벤트가
        적용되는 걸까?
        ->>>>>>>>> keyup!!!

        - 이벤트 대상: #email1, #email2
        -> 모든 이벤트를 함수와 연결하는 메서드는?
        on(이벤트명,함수) -> 제이쿼리 메서드!

    ********************************************/
    $('#email1,#email2').on('keyup', function () {

        // 1. 현재 이벤트 대상 아이디 읽어오기
        let cid = $(this).attr('id');

        // 2. 현재 입력된 값 읽어오기
        let cv = $(this).val();
        console.log('입력아이디:', cid, '\n입력값:', cv);

        // 3. 이메일 뒷주소 셋팅하기
        let backeml =
            cid === 'email1' ? seleml.val() : eml2.val();
        // 변수 = 조건연산자
        // 변수 = 조건식 ? 값1 : 값2
        // -> 조건연산자에서 결정된 값이 변수에 할당된다!
        // 조건: email1인가? 즉 앞주소인가? 
        // 맞으면 선택박스값을 읽어가고 아니면 직접입력창임!

        // 4. 선택박스값이 "free"(직접입력)이면
        // 이메일 뒷주소로 변경함!
        if (seleml.val() === 'free') backeml = eml2.val();

        // 5. 이메일 전체주소 조합하기
        let comp = eml1.val() + '@' + backeml;
        console.log('이메일주소:', comp);

        // 6. 이메일 유효성 검사함수 호출하기!
        resEml(comp);


    }); //////////////// keyup ///////////////////
    //////////////////////////////////////////////




    /**************************************** 
         함수명: resEml (result Email)
         기능: 이메일 검사결과 처리
    ****************************************/
    const resEml = comp => { // comp - 완성된 이메일 주소

        // 이메일 정규식 검사
        // 통과시 //////////////////////
        // vReg(검사할값,검사항목)
        if (vReg(comp, 'eml')) {
            // 메시지 띄우기
            eml1.siblings('.msg')
                .text('적합한 이메일 형식입니다!')
                .addClass('on');

        } ///////// if : 통과시 ///////////
        else { /////// 불통과시 ////////////
            // 메시지 띄우기
            eml1.siblings('.msg')
                .text('맞지않는 이메일 형식입니다!')
                .removeClass('on');

            // 불통과!
            pass = false;

        } ////////// else : 불통과시 ///////////

    }; ////////////// resEml 함수 ///////////////
    /////////////////////////////////////////////

    /********************************************** 
        가입하기(submit) 버튼 클릭시 처리하기
        ____________________________________

        전체검사의 원리:
        전역변수 pass를 설정하여 true 를 할당하고
        검사중간에 불통과 사유발생시 false로 변경!
        유효성검사 통과여부를 판단한다!

        검사방법:
        기존 이벤트 함수 blur  이벤트를 강제로 발생시킨다!
        이벤트 강제발생 메서드는 ->>> trigger(이벤트명)

    **********************************************/

    // 검사용 변수
    let pass;

    // 이벤트 대상: 서브밋 버튼 -> #btnj
    // 원래 서브밋버튼은 클릭시 싸고 있는 form태그의
    // action 속성에 지정되어 페이지로 현재 페이지값을 가지고
    // 이동하게 되어 있음! 그런데 여기서 이 기본기능을 막는다!

    $('#btnj').click(e => {

        // 1. 기본이동 막기
        e.preventDefault();

        // 2. pass 통과여부 변수에 true할당!(처음시작시)
        pass = true;

        // 3. 입력창 blur 이벤트 강제발생시키기!
        // 대상: 블러이벤트 발생했던 요소들!
        $(`input[type=text][id!=email2][class!=search],
   input[type=password]`)
            .trigger('blur');

        // 블러이벤트 강제발생시 각 불통과 항목마다
        // pass = false 로 설정하여 불통과여부를 판단함!

        // 통과여부
        console.log('통과여부:', pass);

        // 4. 검사결과에 따라 메시지 보이기
        if (pass) { ////////// 통과시 ////////////

            /******************************************** 
                [ Ajax를 이용한 POST방식으로 DB에
                데이터 입력하기!!! ]
                ___________________________________

                AJAX = Asynchronous JavaScript and XML

                - 비동기통신이란? 쉽게 말해서 페이지가
                새로고쳐지지 않고 그대로 있으면서 일부만
                서버통신을 하는 것을 말한다!

                - 제이쿼리는 POST방식으로 ajax를 할 수 있다!

                [ POST 방식 Ajax 메서드 ]
                $.post(URL,data,callback)
                $.post(전송할페이지,전송할데이터,전송후실행함수)
                
            
            ********************************************/

            $.post(
                //1. 전송할페이지
                "process/ins.php",
                //2. 전송할데이터
                {
                    // 1. 아이디
                    "mid": $("#mid").val(),
                    // 2.비번
                    "mpw": $("#mpw").val(),
                    // 3.이름
                    "mnm": $("#mnm").val(),
                    // 4.성별(라디오버튼)
                    "gen": $(":radio[name=gen]:checked").val(),
                    // 5-1.이메일 앞주소
                    "email1": $("#email1").val(),
                    // 5-2.이메일 뒷주소
                    "seleml": $("#seleml").val(),
                    // 5-3.직접입력 이메일 뒷주소
                    "email2": $("#email2").val(),
                },
                //3. 전송후실행함수
                function (res) {
                    console.log('실행결과:', res);
                    if (res === "ok") { /// 성공시 ////
                        // 메시지 띄우기
                        alert('회원가입을 축하드립니다! 짝짝짝!');
                        // 원래는 post방식으로 DB에 회원정보를 입력후
                        // DB에 입력완료시 위의 메시지를 띄워준다!

                        // 로그인 페이지로 이동!
                        location.replace('login.php');
                        // location.href = 'login.php';
                        /* 
                            회원가입 후 이전페이지로 못가도록
                            location.replace(주소) 를 사용하여
                            페이지 캐쉬를 삭제하도록하여
                            좀 더 안전한 보안을 유지한다!
                        */

                    } //////// if : 성공시 ///////
                    else { ///////// 실패시 ///////
                        alert("웹마스터에게 문의바랍니다!", res);
                    } //////// else : 실패시 ////////

                } /////// 콜백함수 /////////
            ); ///////// Ajax POST ///////////////




        } ///////////// if : 통과시 /////////////
        else { //////// 불통과시 ////////////////

            alert('입력을 수정하세요~!');

        } /////////// else : 불통과시 ////////////

    }); /////////////// click ///////////////////





}); ///////////// jQB //////////////////////




/*////////////////////////////////////////////////////////
    함수명: vReg (validation with Regular Expression)
    기능: 값에 맞는 형식을 검사하여 리턴함
    (주의: 정규식을 따옴표로 싸지말아라!-싸면문자가됨!)
*/ ////////////////////////////////////////////////////////
function vReg(val, cid) {
    // val - 검사할값, cid - 처리구분아이디
    // //console.log("검사:"+val+"/"+cid);

    // 정규식 변수
    let reg;

    // 검사할 아이디에 따라 정규식을 변경함
    switch (cid) {
        case "mid": // 아이디
            reg = /^[a-z]{1}[a-z0-9]{5,19}$/g;
            // 영문자로 시작하는 6~20글자 영문자/숫자
            // /^[a-z]{1} 첫글자는 영문자로 체크!
            // [a-z0-9]{5,19} 첫글자 다음 문자는 영문 또는 숫자로
            // 최소 5글자에서 최대 19글자를 유효범위로 체크!
            // 첫글자 한글자를 더하면 최소 6글자에서 최대 20글자체크!
            break;
        case "mpw": // 비밀번호
            reg = /^.*(?=^.{5,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
            // 특수문자,문자,숫자포함 형태의 5~15자리
            // (?=^.{5,15}$) 시작부터 끝까지 전체 5~15자릿수 체크!
            // (?=.*\d) 숫자 사용체크!
            // (?=.*[a-zA-Z]) 영문자 대문자 또는 소문자 사용체크!
            // (?=.*[!@#$%^&+=]) 특수문자 사용체크!
            break;
        case "eml": // 이메일
            reg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            // 이메일 형식에 맞는지 검사하는 정규식
            break;
    } //////////// switch case문 //////////////////

    // //console.log("정규식:"+reg);

    // 정규식 검사를 위한 JS메서드 
    // -> 정규식.test(검사할값) : 결과 true/false
    return reg.test(val); //호출한 곳으로 검사결과리턴!

} //////////// vReg 함수 //////////////////////////////////
///////////////////////////////////////////////////////////