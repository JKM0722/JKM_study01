$(() => {

    /************************************** 
    마우스 오버 JS
    **************************************/

    let li = $('li');
    


    let ltxt =""
    
    // ltxt = li.eq(num).text()

    // console.log(ltxt)
    $("li").hover(
        function () {
            ltxt = $(this).text()
            $(".section2 img").attr("src", "./img/img" + ($(this).index()+1) + ".jpg").css({
                borderRadius: "100px"
            })
            $(".section2 span").text(ltxt)
        },
        function () {
            $(".section2 img").css({
                borderRadius: "5px"
            })
            $(".section2 span").text("");
        }
    )






    // $(document).ready(function(){


    //     li.eq(0).hover(
    //         function() {$(".section2 img").attr("src","./img/img1.jpg").css({
    //             borderRadius: "100px"
    //         })
    //         $(".section2 span").text(ltxt0)
    //     },
    //         function() {
    //             $(".section2 img").css({
    //                 borderRadius: "5px"
    //             })
    //             $(".section2 span").text("");
    //         }
    //         );


    //     li.eq(1).hover(
    //         function() {$(".section2 img").attr("src","./img/img2.jpg").css({
    //             borderRadius: "100px"
    //         })            
    //         $(".section2 span").text(ltxt1)
    //         ;},
    //         function() {
    //             $(".section2 img").css({
    //                 borderRadius: "5px"
    //             })
    //             $(".section2 span").text("")
    //             ;
    //         }
    //         );

    //     li.eq(2).hover(
    //         function() {
    //             $(".section2 img").attr("src","./img/img3.jpg").css({
    //                 borderRadius: "100px"
    //             })
    //             $(".section2 span").text(ltxt2)
    //         },
    //         function() {
    //             $(".section2 img").css({
    //                 borderRadius: "5px"
    //             })
    //             $(".section2 span").text("")
    //             ;
    //         },

    //         )





    //     li.eq(3).hover(
    //         function() {$(".section2 img").attr("src","./img/img4.jpg").css({
    //             borderRadius: "100px"
    //         })
    //         $(".section2 span").text(ltxt3)
    //         ;},
    //         function() {
    //             $(".section2 img").css({
    //                 borderRadius: "5px"
    //             })
    //             $(".section2 span").text("");
    //         },
    //         );
    // });


}) ///////////////JQB///////////////////