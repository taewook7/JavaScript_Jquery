$(document).ready(function(){


   var moveSection=function() {
        $(".gnb li").click(function(){
            var index=$(this).index();
            var sectionTop =$("section").eq(index).offset().top;
            // alert(index);
            $("html,body").animate({scrollTop:sectionTop});
        });
   }

   moveSection();
//    console.log($("section").eq(1).offset().top);

   var rotateIcon=function() {
    $(".mobileGnb").click(function(){
        $(this).toggleClass("rotate");
        if($(this).hasClass("rotate")) {
            $(".gnb").animate({right:0},300);
            $(".mobileGnb span").addClass("whiteColor");
        }else{
            $(".gnb").animate({right:'-70%'},300);
            $(".mobileGnb span").removeClass("whiteColor");
        }
    });
   }
   rotateIcon();

   var headerFix=function(){
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        
        if(scroll > 0) {
            // $("header").css({position:'fixed',height:'100px' });
            $("header").addClass('on');
        }else {
            // $("header").css({position:'static'});
            $("header").removeClass('on');
        }
    });
   }
   headerFix();

//    이미지스 페이지로 가게되면 상단배너에 불이 들어온다.

   var activeLoca = function() {
    var loca = $(location).attr('href');
    var findImages = "images";

    if(loca.indexOf(findImages) > 0) {
        $(".gnb li").eq(2).addClass("active");

    } 
}

   activeLoca();
});