<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="컬렉션부터 스타일, 쇼핑, 뷰티, 라이프스타일, 셀러브리티까지 지금 가장 핫한 트렌드 소개">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | 보그 코리아 (Vogue Korea)</title>
    <link rel="shortcut icon" href="images/icon.jpg" type="image/x-icon" />
    <!-- 폰티스토 문자아이콘 CDN -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css">
    <link rel="stylesheet" href="css/login.css">
    <!-- 미디어쿼리는 아래쪽에 덮어쓰도록! -->
    <link rel="stylesheet" href="css/media.css">

    <!-- 외부JS삽입 -->
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    
    <!-- 링크시스템 JS -->
    <script src="js/linksys.js"></script>

    <!-- 부드러운 스크롤 JS -->
    <script src="js/smoothScroll20.js"></script>

    <script src="js/common.js"></script>
    <!-- 로그인페이지 JS -->
    <script src="js/login.js"></script>
</head>

<body>
    <!-- 1. 상단영역 -->
    <?php include "inc/top.inc" ?>
    <!-- 2. 메인영역 -->
    <div class="bgc">
        <main class="ibx cont">
            <!-- 2-1. 카테고리 페이지 탑영역 -->
            <header class="ctop">
                <!-- 2-1-1. 서브타이틀 -->
                <h2 class="stit">Login</h2>
            </header>
            <!-- 2-2. 갤러리 페이지 컨텐츠 박스 -->
            <section class="scont">
                <!-- form 요소 : 
                    입력데이터를 전송하기위한 요소
                    속성
                    action - 전송할 처리페이지
                    method - post : post방식 전달설정
                            get : get방식 전달설정

                    (get방식:url로 키=값 쌍으로 데이터전달)
                    (post방식:페이지로 데이터를 전달하는 숨김방식)
                -->
                <form action="process.php" method="post" class="logF">
                    <!-- 아이디박스 -->
                    <div class="minput">
                        <label for="mid">아이디</label>
                        <input type="text" name="mid" id="mid" maxlength="10" placeholder="아이디를 입력해 주세요!">
                    </div>
                    <!-- 비밀번호박스 -->
                    <div class="minput">
                        <label for="mpw">비밀번호</label>
                        <input type="password" name="mpw" id="mpw" maxlength="10" placeholder="비밀번호를 입력해 주세요!">
                    </div>
                    <!-- 버튼영역 -->
                    <div class="btnbx">
                        <input type="submit" id="sbtn" value="LOGIN">
                        <!-- type-"submit" 서브밋버튼
                        전체 form요소의 데이터를 action
                        페이지로 전달함! -->
                    </div>
                    <!-- 기타링크 -->
                    <div class="addbx">
                        <span>
                            <input type="checkbox" id="chkbx" name="chkbx">
                            <label for="chkbx">아이디저장</label>
                        </span>
                        <!-- 모바일에서 보일바 .bar1 -->
                        <b class="bar bar1"> | </b>
                        <a href="#">아이디찾기</a>
                        <!-- 모바일에서 숨길바 .bar2 -->
                        <b class="bar bar2"> | </b>
                        <!-- 모바일에서 줄바꿈 .brk --> 
                        <br class="brk">
                        <a href="#">비밀번호찾기</a> | 
                        <a href="#">회원가입</a>
                    </div>
                </form>
            </section>
        
        </main>
    </div>
    <!-- 3. 하단영역 -->
    <?php include "inc/info.inc" ?>


</body>

</html>