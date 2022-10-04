// 문서가 준비되었는지 확인하기 
// js: window.onload = function(){};
$(document).ready(function(){
    // 탭 메뉴 클릭
    $(".list a:eq(0)").click(function(){
        $(".tab1").show();
        $(".tab2").hide();
    });
    $(".list a:eq(1)").click(function(){
        $(".tab1").hide();
        $(".tab2").show();
    });
    // sns이미지 hover시 이미지 확대
    $(".sns .sns_container").mouseenter(function(){
        $(this).find('img').stop().animate({
            width:60,height:60
            }, 'fast');
    });
    $(".sns .sns_container").mouseleave(function(){
        $(this).find('img').stop().animate({
            width:55,height:55
            }, 'fast');

    });
    // 메뉴 슬라이드
    $(".gnb > ul > li").mouseenter(function(){
        $(".gnb ul ul").stop().slideDown("fast");
    });
    $(".gnb > ul > li").mouseleave(function(){
        $(".gnb ul ul").stop().slideUp("fast");
    });
    // 텍스트 클릭시 이미지 전환
    let num = 0;
    let imageName = ["img1","img2","img3","img4"];  
    $(".cafe_intro").click(function(){
        if(num == 3) num=0;
        else num++;
        $(".section1_img img").attr("src","./images/"+imageName[num]+".jpg");
    });
});
